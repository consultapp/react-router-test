import { rootRoute1 } from '../elma'
import { NavLink } from 'react-router'

export default function Menu() {
  return (
    <div style={{ display: 'grid', gap: '10px' }}>
      Menu
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/page1'>Page1</NavLink>
      <NavLink to='/page2'>Page2</NavLink>
      <NavLink to='/page2/111?q=222'>Page2 - /page2/111?q=222</NavLink>
      <NavLink to={`${rootRoute1}`}>Home react_spa</NavLink>
      <NavLink to={`${rootRoute1}/page1`}>Page1 react_spa</NavLink>
      <NavLink to={`${rootRoute1}/page2/111?q=222`}>
        Page2 - /page2/111?q=222
      </NavLink>
    </div>
  )
}
