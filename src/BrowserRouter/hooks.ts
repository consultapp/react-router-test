import { useContext } from 'react'
import { BrowserContext } from './context'
import { getBaseUrl } from './utils'

export function useSearchParams() {
  return new URL(getBaseUrl() + useContext(BrowserContext).page).searchParams
}

export function usePage() {
  return useSearchParams().get('page')?.slice(1, -1) ?? ''
}

export function useSetPage() {
  return useContext(BrowserContext).setPage
}
