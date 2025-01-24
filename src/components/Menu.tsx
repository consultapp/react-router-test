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
      <hr style={{ width: '100%' }} />
      <NavLink to='project'>project</NavLink>
      <NavLink to='project/1'> project: 1</NavLink>
      <NavLink to='project/2'> project: 2</NavLink>
      <NavLink to='project/1/edit/test'>edit project 1 test</NavLink>
      <NavLink to='project/1/edit/dev'>edit project 1 dev</NavLink>
      <NavLink to='project/2/edit/dev'>edit project 2 dev</NavLink>
    </div>
  )
}
