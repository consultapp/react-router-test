import { useParams } from '../BrowserRouter/hooks'
import Menu from './Menu'

const Project = () => {
  const { param1 } = useParams()
  return (
    <>
      <Menu />
      <h2>Project:{param1} </h2>
    </>
  )
}

export { Project }
