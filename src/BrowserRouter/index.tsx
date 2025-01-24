import { useEffect, useMemo, useState } from 'react'
import { BrowserContext, ParamsContext } from './context'
import { NavLink } from './NavLink/NavLink'
import { Route } from './Route/Route'
import { getBaseUrl } from './utils'
import { ErrorPage } from './ErrorPage/ErrorPage'
import { ErrorRoute } from './ErrorRoute/ErrorRoute'
import { log } from '../utils'

type Props = {
  children:
    | React.ReactElement<typeof Route>
    | React.ReactElement<typeof Route>[]
}

type RouteProps = {
  page: string
  regExp: RegExp
  mask: string
  element: React.ReactElement
}

function getPageRegExp(pageMask: string) {
  const arr = pageMask.split('/')
  arr.forEach((item, i) => {
    if (item.includes(':')) {
      log('item', item)
      arr[i] = `([0-9a-zA-Z]*)`
    }
  })

  return new RegExp('^' + arr.join('/') + '$', 'g')
}

function getParams(pageMask: string, pageName: string) {
  const pageMaskArr = pageMask.split('/')
  const pageNameArr = pageName.split('/')
  const result: Record<string, string> = {}

  pageMaskArr.forEach((item, i) => {
    if (item.startsWith(':')) result[item.slice(1)] = pageNameArr[i]
  })
  log('getParams', result)

  return result
}

const filterChildrens = (
  children: Props['children'],
  type: typeof Route | typeof ErrorRoute,
) =>
  (Array.isArray(children) ? children : [children])
    .filter(ch => ch.type === type)
    .map(item => ({ ...item.props })) as RouteProps[]

let render = 0

function BrowserRouter({ children }: Props) {
  log('====> render++', render++)
  const [page, setPage] = useState(window.location.search)
  const [component, setComponent] = useState<React.ReactElement>()

  const routes = useMemo(
    () =>
      filterChildrens(children, Route).map(item => ({
        ...item,
        regExp: getPageRegExp(item.page ?? ''),
        mask: item.page ?? '',
      })),
    [children],
  )

  const isRoutesDuplication = useMemo(
    () =>
      new Set(routes.map(item => item.regExp.toString())).size !==
      routes.map(item => item.toString()).length,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [children],
  )

  const errorRoutes = useMemo(
    () => filterChildrens(children, ErrorRoute),
    [children],
  )

  const currentPageName = useMemo(
    () =>
      new URL(getBaseUrl() + page).searchParams.get('page')?.slice(1, -1) ?? '',
    [page],
  )

  const routeIndex = useMemo(
    () => routes.findIndex(({ regExp }) => currentPageName.match(regExp)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [children, page],
  )

  const errorPageComponent = useMemo(
    () =>
      errorRoutes.length ? (
        errorRoutes[0].element
      ) : (
        <ErrorPage msg='404: Page not found.' />
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [children],
  )

  const params = useMemo(
    () => getParams(routes[routeIndex].mask, currentPageName),
    [currentPageName, routeIndex, routes],
  )

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

  useEffect(() => {
    const c = routeIndex < 0 ? errorPageComponent : routes[routeIndex]?.element
    if (c !== component) setComponent(c)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeIndex])

  // log('page', page)
  // log('currentPageName', currentPageName)
  // log('routeIndex', routeIndex)
  // log('children', children)
  // log('routes', routes)
  // log('errorRoutes', errorRoutes)
  // log('component', component)
  // log('isRoutesDuplication', isRoutesDuplication)
  // log('params', params)

  return (
    <BrowserContext.Provider value={{ page, setPage }}>
      {isRoutesDuplication && <div>Ошибка: Дублирование путей</div>}
      <ParamsContext.Provider value={params}>
        {component}
      </ParamsContext.Provider>
    </BrowserContext.Provider>
  )
}
export { BrowserRouter, NavLink, Route }
