import { useCallback, useMemo } from 'react'
import { getBaseUrl } from '../fns'
import { useSetPage } from '../hooks'

type Props = {
  to?: string
  children: string
}

export const NavLink = ({ to = '', children }: Props) => {
  const setPage = useSetPage()

  const href = useMemo(() => {
    const url = to.split('?')
    const page = url[0] ? `?page=(${url[0] ?? ''})` : ''
    const params = url[1] ? `&${url[1]}` : ''
    return `${page}${params}`
  }, [to])

  const clickHandler: React.MouseEventHandler<HTMLAnchorElement> = useCallback(
    e => {
      e.preventDefault()
      history.pushState(null, '', getBaseUrl() + href)
      setPage(href)
    },
    [href, setPage],
  )
  return (
    <a href={href} onClick={clickHandler}>
      {children}
    </a>
  )
}
