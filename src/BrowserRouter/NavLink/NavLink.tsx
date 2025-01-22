import { useSetPage } from '../hooks'

type Props = {
  to?: string
  children: string
}

export const NavLink = ({ to = '', children }: Props) => {
  const url = to.split('?')
  const href = `${url[0] ? `?page=(${url[0] ?? ''})` : ''}${
    url[1] ? `&${url[1]}` : ''
  }`
  const setPage = useSetPage()

  const clickHandler: React.MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault()
    setPage(href)
    history.pushState(null, '', location.origin + location.pathname + href)
  }
  return (
    <a href={href} onClick={clickHandler}>
      {children}
    </a>
  )
}
