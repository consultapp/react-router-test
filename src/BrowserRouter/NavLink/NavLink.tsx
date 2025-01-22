type Props = {
  to?: string
  children: string
}

export const NavLink = ({ to = '', children }: Props) => {
  const to1 = new URLSearchParams(to)
  console.log('to1', to1)

  return <a href={`?page=(${to})`}>{children}</a>
}
