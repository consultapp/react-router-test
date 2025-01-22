import { useEffect, useState } from 'react'
import { BrowserContext } from './context'

type Props = {
  children: React.ReactElement
}

export function BrowserRouter({ children }: Props) {
  const [page, setPage] = useState(window.location.search)

  useEffect(() => {
    const controller = new AbortController()
    window.addEventListener(
      'popstate',
      () => {
        setPage(window.location.search)
      },
      { signal: controller.signal },
    )
    return () => controller.abort()
  }, [])

  console.log('page', page)
  return (
    <BrowserContext.Provider value={{ page, setPage }}>
      {children}
    </BrowserContext.Provider>
  )
}
