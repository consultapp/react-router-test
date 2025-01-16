import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { log } from './utils'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Home1 from './pages/Home1'

let renderCount = 0
const rootRoute = '/'
export const rootRoute1 = '/egorov/react_router_test'

function reactRender({ root, contextData, server }: ElmaProps) {
  if (!import.meta.env.DEV && (!contextData || !server)) {
    throw new Error('React: No Context.data or server object.')
  }

  log(`reactRender №${renderCount++}`, root)

  if (root)
    createRoot(root).render(
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path={rootRoute + 'page1'} element={<Page1 />} />
            <Route path={rootRoute + 'page2/:param1?'} element={<Page2 />} />
          </Routes>
          <Routes>
            <Route path={rootRoute1} element={<Home1 />} />
            <Route path={rootRoute1 + '/page1'} element={<Page1 />} />
            <Route path={rootRoute1 + '/page2/:param1?'} element={<Page2 />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>,
    )
}
export { reactRender }
