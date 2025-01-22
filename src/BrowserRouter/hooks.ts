import { useContext } from 'react'
import { BrowserContext } from './context'

export function useSearchParams() {
  return new URL(
    location.origin + location.pathname + useContext(BrowserContext).page,
  ).searchParams
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
