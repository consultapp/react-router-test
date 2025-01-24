import { memo } from 'react'

type Props = { msg?: string }

export const ErrorPage = memo(({ msg }: Props) => {
  return <div>{msg ? msg : '404: Page not found'}</div>
})
