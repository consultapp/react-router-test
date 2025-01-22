export function useQuery() {
  return new URLSearchParams(window.location.search)
}

export function usePage() {
  return (
    new URLSearchParams(window.location.search).get('page')?.slice(1, -1) ?? ''
  )
}
