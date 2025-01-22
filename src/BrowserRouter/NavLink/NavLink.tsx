type Props = {
  to?: string
  children: string
}

export const NavLink = ({ to = '', children }: Props) => {
  const url = to.split('?')

  return (
    <a
      href={`${url[0] ? `?page=(${url[0] ?? ''})` : ''}${
        url[1] ? `&${url[1]}` : ''
      }`}
    >
      {children}
    </a>
  )
}
