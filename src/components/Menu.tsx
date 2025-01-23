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
      <NavLink to={`projects`}>projects</NavLink>
      <hr style={{ width: '100%' }} />
      <NavLink to={`project`}>project</NavLink>
      <NavLink to={`project?id=1`}> project: 1</NavLink>
      <NavLink to={`project?id=2`}> project: 2</NavLink>
      <NavLink to={`project/edit?id=1`}>edit project 1</NavLink>
      <NavLink to={`project/edit?id=2`}>edit project 2</NavLink>
    </div>
  )
}
