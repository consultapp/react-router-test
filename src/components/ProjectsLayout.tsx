import { Outlet } from 'react-router-dom'
import Menu from './Menu'

function ProjectsLayout() {
  return (
    <div>
      <header>
        <h2>ProjectsLayout</h2>
        <Menu />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export { ProjectsLayout }
