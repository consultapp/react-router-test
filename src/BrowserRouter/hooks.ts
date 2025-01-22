import { useContext } from 'react'
import { BrowserContext } from './context'

export function useQuery() {
  return new URLSearchParams(window.location.search)
}

export function useSearchParams() {
  return new URLSearchParams(window.location.search)
}

export function usePage() {
  return (
    new URL(
      location.origin + location.pathname + useContext(BrowserContext).page,
    ).searchParams
      .get('page')
      ?.slice(1, -1) ?? ''
  )
}

export function useSetPage() {
  return useContext(BrowserContext).setPage
}
