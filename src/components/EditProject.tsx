import { useParams } from '../BrowserRouter/hooks'
import Menu from './Menu'

const EditProject = () => {
  const { id, status } = useParams()
  return (
    <>
      <Menu />
      <h2>EditProject:{id} </h2>
      <h2>Status:{status} </h2>
    </>
  )
}

export { EditProject }
