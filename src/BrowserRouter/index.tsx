import { useState } from 'react'
import { BrowserContext } from './context'

type Props = {
  children: React.ReactElement
}

export function BrowserRouter({ children }: Props) {
  const [page, setPage] = useState(window.location.search)

  console.log('page', page)
  return (
    <BrowserContext.Provider value={{ page, setPage }}>
      {children}
    </BrowserContext.Provider>
  )
}
