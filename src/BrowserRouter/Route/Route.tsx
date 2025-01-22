import { usePage } from '../hooks'

type Props = {
  element: React.ReactElement
  page?: string
}
export function Route({ element, page = '' }: Props) {
  const pageName = usePage()
  return pageName === page && element
}
