import { useSetPage } from '../hooks'

type Props = {
  to?: string
  children: string
}

export const NavLink = ({ to = '', children }: Props) => {
  const setPage = useSetPage()

  const url = to.split('?')
  const page = url[0] ? `?page=(${url[0] ?? ''})` : ''
  const params = url[1] ? `&${url[1]}` : ''
  const href = `${page}${params}`

  const clickHandler: React.MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault()
    history.pushState(null, '', location.origin + location.pathname + href)
    setPage(href)
  }
  return (
    <a href={href} onClick={clickHandler}>
      {children}
    </a>
  )
}
