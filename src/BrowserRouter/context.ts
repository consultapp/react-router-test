import { createContext } from 'react'

export const BrowserContext = createContext<{
  page: string
  setPage: React.Dispatch<React.SetStateAction<string>>
}>({ page: '', setPage: () => {} })

export const ParamsContext = createContext<Record<string, string>>({})
