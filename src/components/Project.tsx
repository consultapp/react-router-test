import { useParams } from '../BrowserRouter/hooks'
import Menu from './Menu'

const Project = () => {
  const { id } = useParams()
  return (
    <>
      <Menu />
      <h2>Project:{id} </h2>
    </>
  )
}

export { Project }
