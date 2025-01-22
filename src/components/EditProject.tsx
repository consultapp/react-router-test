import { useSearchParams } from '../BrowserRouter/hooks'
import Menu from './Menu'

const EditProject = () => {
  const s = useSearchParams()
  return (
    <>
      <Menu />
      <h2>EditProject:{s.get('id')} </h2>
    </>
  )
}

export { EditProject }
