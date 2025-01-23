import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { log } from './utils'
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

import { ProjectsHome } from './components/ProjectsHome'

import { Project } from './components/Project'
import { BrowserRouter, Route } from './BrowserRouter'
import { EditProject } from './components/EditProject'

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
          <Route element={<Home />} />
          <Route page='page1' element={<Page1 />} />
          <Route page='page2' element={<Page2 />} />
          <Route page='projects' element={<ProjectsHome />} />
          <Route page='project' element={<Project />} />
          <Route page='project/:param1' element={<Project />} />
          <Route page='project/:id/edit/:status' element={<EditProject />} />
        </BrowserRouter>
      </StrictMode>,
    )
}
export { reactRender }
