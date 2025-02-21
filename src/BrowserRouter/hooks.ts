import { useCallback, useContext } from 'react'
import { BrowserContext, ParamsContext } from './context'
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

export function useParams() {
  return useContext(ParamsContext)
}

export function useNavigate() {
  const setPage = useSetPage()
  const navigate = useCallback(
    (href: string) => {
      history.pushState(null, '', getBaseUrl() + href)
      setPage(href)
    },
    [setPage],
  )
  return navigate
}
