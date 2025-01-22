import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { log } from './utils'
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

import { ProjectsHome } from './components/ProjectsHome'

import { Project } from './components/Project'
import { EditProject } from './components/EditProject'
import { BrowserRouter } from './BrowserRouter'
import { Route } from './BrowserRouter/Route/Route'

let renderCount = 0

function reactRender({ root, contextData, server }: ElmaProps) {
  if (!import.meta.env.DEV && (!contextData || !server)) {
    throw new Error('React: No Context.data or server object.')
  }

  log(`reactRender №${renderCount++}`, root)

  if (root)
    createRoot(root).render(
      <StrictMode>
        <BrowserRouter>
          <>
            <Route element={<Home />} />
            <Route page={'page1'} element={<Page1 />} />
            <Route page={'page2'} element={<Page2 />} />
            <Route page='projects' element={<ProjectsHome />} />
            <Route page='projects/2/edit' element={<EditProject />} />
            <Route page='project' element={<Project />} />
          </>
        </BrowserRouter>
      </StrictMode>,
    )
}
export { reactRender }
