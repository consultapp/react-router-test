import { useEffect, useMemo, useRef, useState } from 'react'
import { BrowserContext, ParamsContext } from './context'
import { NavLink } from './NavLink/NavLink'
import { Route } from './Route/Route'
import { getBaseUrl } from './utils'
import { ErrorPage } from './ErrorPage/ErrorPage'

type Props = {
  children:
    | React.ReactElement<typeof Route>
    | React.ReactElement<typeof Route>[]
}

function getPageRegExp(pageMask: string) {
  const arr = pageMask.split('/')
  arr.forEach((item, i) => {
    if (item.includes(':')) {
      console.log('item', item)
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
  console.log('getParams', result)

  return result
}

let render = 0

function BrowserRouter({ children }: Props) {
  console.log('====> render++', render++)
  const [page, setPage] = useState(window.location.search)
  const [component, setComponent] = useState<React.ReactElement>()
  const childrenRefs = useRef(
    (Array.isArray(children) ? children : [children]).filter(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ch => ch.type.name === 'Route',
    ),
  )
  const childrenErrorRefs = useRef(
    (Array.isArray(children) ? children : [children]).filter(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ch => ch.type.name === 'ErrorRoute',
    ),
  )

  const currentPageName = useMemo(
    () =>
      new URL(getBaseUrl() + page).searchParams.get('page')?.slice(1, -1) ?? '',
    [page],
  )

  const routeRegExps = useMemo(
    () =>
      childrenRefs.current.map(item =>
        //@ts-expect-error ts-ignore
        getPageRegExp(item.props.page ?? ''),
      ),
    [childrenRefs],
  )
  const routeMasks = useMemo(
    () =>
      childrenRefs.current.map(
        item =>
          //@ts-expect-error ts-ignore
          item.props.page ?? '',
      ),
    [childrenRefs],
  )

  const routeRegExpsisError = useMemo(
    () =>
      new Set(routeRegExps.map(item => item.toString())).size !==
      routeRegExps.map(item => item.toString()).length,
    [routeRegExps],
  )

  const routeIndex = useMemo(() => {
    for (let i = 0; i < routeRegExps.length; i++) {
      if (currentPageName.match(routeRegExps[i])) return i
    }
    return -1
  }, [routeRegExps, currentPageName])

  const currentMask = useMemo(() => {
    return routeIndex < 0 ? '' : routeMasks[routeIndex]
  }, [routeIndex, routeMasks])

  const errorPageComponent = useMemo(
    () =>
      childrenErrorRefs.current.length &&
      Object.keys(childrenErrorRefs.current[0].props).length > 0 ? (
        //@ts-expect-error ts-ignore
        childrenErrorRefs.current[0].props.element
      ) : (
        <ErrorPage msg='404: Page not found.' />
      ),
    [],
  )

  const currentPageComponent = useMemo(
    () =>
      //@ts-expect-error ts-ignore
      routeIndex > 0 ? childrenRefs.current[routeIndex].props.element : null,
    [routeIndex],
  )

  const params = useMemo(
    () => getParams(currentMask, currentPageName),
    [currentMask, currentPageName],
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
    setComponent(routeIndex < 0 ? errorPageComponent : currentPageComponent)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeIndex])

  // console.log('children', children)
  // console.log('childrenRefs.current', childrenRefs.current)
  // console.log(
  //   'childrenErrorRefs.current',
  //   childrenErrorRefs.current,
  // )
  // console.log('page', page)
  // console.log('currentPageName', currentPageName)
  // console.log('component', component)
  // console.log('routeIndex', routeIndex)
  // console.log('routeRegExps', routeRegExps)
  // console.log('routeRegExpsisError', routeRegExpsisError)
  // console.log('params', params)

  if (routeRegExpsisError) return <div>Ошибка. Дублирующие пути.</div>

  return (
    <BrowserContext.Provider value={{ page, setPage }}>
      {routeRegExpsisError && <div>Дублирование путей</div>}
      <ParamsContext.Provider value={params}>
        {component}
      </ParamsContext.Provider>
    </BrowserContext.Provider>
  )
}
export { BrowserRouter, NavLink, Route }
