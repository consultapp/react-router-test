import { useCallback, useMemo } from 'react'
import { useNavigate } from '../hooks'

type Props = {
  to?: string
  children: string
}

export const NavLink = ({ to = '', children }: Props) => {
  const navigate = useNavigate()

  const href = useMemo(() => {
    const url = to.split('?')
    const page = url[0] ? `?page=(${url[0] ?? ''})` : ''
    const params = url[1] ? `&${url[1]}` : ''
    return `${page}${params}`
  }, [to])

  const clickHandler: React.MouseEventHandler<HTMLAnchorElement> = useCallback(
    e => {
      e.preventDefault()
      navigate(href)
    },
    [href, navigate],
  )
  return (
    <a href={href} onClick={clickHandler}>
      {children}
    </a>
  )
}
