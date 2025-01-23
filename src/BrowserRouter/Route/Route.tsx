import { useMemo } from 'react'
import { usePage } from '../hooks'
import { ParamsContext } from '../context'

type Props = {
  element: React.ReactElement
  page?: string
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
// regexp.exec(pageName))
function getParams(pageMask: string, pageName: string) {
  const pageMaskArr = pageMask.split('/')
  const pageNameArr = pageName.split('/')
  const result: Record<string, string> = {}

  pageMaskArr.forEach((item, i) => {
    if (item.startsWith(':')) result[item.slice(1)] = pageNameArr[i]
  })

  return result
}

export function Route({ element, page = '' }: Props) {
  const pageName = usePage()
  const regexp = useMemo(() => getPageRegExp(page), [page])
  const params = useMemo(() => getParams(page, pageName), [page, pageName])

  // console.log('->page', page, 'pageName', pageName)
  // console.log('regexp', regexp, pageName.match(regexp), regexp.exec(pageName))
  // console.log('params', params)

  return (
    pageName.match(regexp) && (
      <ParamsContext.Provider value={params}>{element}</ParamsContext.Provider>
    )
  )
}
