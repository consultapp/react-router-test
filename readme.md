# Get-based React Router

Данный роутер основан на навигацию с использование только get параметров. Целью такой схемы служит возможность внедрять приложение в системы, контролирующие браузерную строку и избежание конфликтов с их роутерами. При этом роутер обновляет history страницы и поддерживает переходы по истории вперед, назад.

## Внедрение

```ts
<BrowserRouter>
  <Route element={<Home />} />
  <Route page='page1' element={<Page1 />} />
  <Route page='page2' element={<Page2 />} />
  <Route page='projects' element={<ProjectsHome />} />
  <Route page='project' element={<Project />} />
  <Route page='project/:param1' element={<Project />} />
  <Route page='project/:id/edit/:status' element={<EditProject />} />
  <ErrorRoute element={<ErrorPage msg='Custom 404: Page not found.' />} />
</BrowserRouter>
```

### Route

Компонент для задания маски пути, поддерживает динамические параметры - `project/:param1`, принимает 2 параметра.

```ts
type RouteProps = {
  element: React.ReactElement
  page?: string
}
```

### ErrorRoute

Компонент для определения компонента страницы, отображаемого при несовпадении всех указанных масок. При его отсутствии показывается базовый компонент ошибки 404.

```ts
type ErrorRouteProps = {
  element: React.ReactElement
}
```

Компонент для задания компонента для

## Переходы по страницам

Переходы осуществляются или через специальный компонент ссылки `<NavLink/>` или с помощью хука `useNavigate()`

### Компонент NavLink

```ts
import { NavLink } from '../BrowserRouter/'

export default function Menu() {
  return (
    <div style={{ display: 'grid', gap: '10px', fontSize: '16px' }}>
      Menu
      <NavLink>Home</NavLink>
      <NavLink to='page1'>Page1</NavLink>
      <NavLink to='page2'>Page2</NavLink>
      <NavLink to='page2?q=222'>Page2 q=222</NavLink>
      <NavLink to='page2?q=333'>Page2 q=333</NavLink>
      <NavLink to='projects'>projects</NavLink>
      <NavLink to='project'>project</NavLink>
      <NavLink to='project/1'> project: 1</NavLink>
      <NavLink to='project/2'> project: 2</NavLink>
      <NavLink to='project/1/edit/test'>edit project 1 test</NavLink>
      <NavLink to='project/1/edit/dev'>edit project 1 dev</NavLink>
      <NavLink to='project/2/edit/dev'>edit project 2 dev</NavLink>
    </div>
  )
}
```

### useNavigate()

Хук возвращает функцию, позволяющую осуществлять переходы

```ts
useNavigate(): (href: string) => void
```

```ts

import { useNavigate } from '../BrowserRouter/hooks'
...
const navigate = useNavigate()
...
const clickHandler: React.MouseEventHandler<HTMLAnchorElement> = useCallback(
  e => {
    e.preventDefault()
    navigate(href)
  },
  [href, navigate],
)
```

## Параметры в URL

Чтение параметров осуществляется через 2 хука:

- `function useParams(): Record<string, string>`
- `function useSearchParams(): URLSearchParams`

### useParams: параметры динамического пути

```ts
import { useParams } from '../BrowserRouter/hooks'

// <Route page='project/:param1' element={<Project />} />
export const Project = () => {
  const { param1 } = useParams()
  return (
    <>
      <h1>Project</h1>
      <h2>Param1:{param1} </h2>
    </>
  )
}
```

### useSearchParams: параметры GET

```ts
import { useSearchParams } from '../BrowserRouter/hooks'

//  <Route page='page2' element={<Page2 />} />
export const Page2 = () => {
  const searchParams = useSearchParams()
  return (
    <div>
      <h1>Page2</h1>
      <h3>searchParams.get('q'):{searchParams.get('q')}</h3>
    </div>
  )
}
```
