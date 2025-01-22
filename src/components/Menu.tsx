import { NavLink } from '../BrowserRouter/NavLink/NavLink'

export default function Menu() {
  return (
    <div style={{ display: 'grid', gap: '10px', fontSize: '16px' }}>
      Menu
      <NavLink>Home</NavLink>
      <NavLink to='page1'>Page1</NavLink>
      <NavLink to='page2'>Page2</NavLink>
      <NavLink to='page2?q=222'>Page2 - /page2/111?q=222</NavLink>
      <NavLink to={`projects`}>projects</NavLink>
      <NavLink to={`project`}>project</NavLink>
      <hr />
      <NavLink to={`projects_direct`}>full path: projects</NavLink>
      <NavLink to={`projects/1`}>full path: projects 1</NavLink>
      <NavLink to={`projects/2`}>full path: projects 2</NavLink>
      <NavLink to={`projects/2/edit`}>full path: projects 2 edit</NavLink>
    </div>
  )
}

// Menu
// <NavLink to='/'>Home</NavLink>
// <NavLink to='/page1'>Page1</NavLink>
// <NavLink to='/page2'>Page2</NavLink>
// <NavLink to='/page2/111?q=222'>Page2 - /page2/111?q=222</NavLink>
// <NavLink to={`${rootRoute1}`}>Home react_spa</NavLink>
// <NavLink to={`page1`}>Page1 react_spa</NavLink>
// <NavLink to={`page2/111?q=222`}>
//   Page2 - /page2/111?q=222
// </NavLink>
// <NavLink to={`projects`}>projects</NavLink>
// <NavLink to={`projects/1`}>projects 1</NavLink>
// <NavLink to={`projects/2`}>projects 2</NavLink>
// <NavLink to={`projects/2/edit`}>projects 2 edit</NavLink>
// <hr />
// <NavLink to={`projects_direct`}>
//   full path: projects
// </NavLink>
// <NavLink to={`projects`}>full path: projects</NavLink>
// <NavLink to={`projects/1`}>full path: projects 1</NavLink>
// <NavLink to={`projects/2`}>full path: projects 2</NavLink>
// <NavLink to={`projects/2/edit`}>
//   full path: projects 2 edit
// </NavLink>
