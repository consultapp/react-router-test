import { useSearchParams } from '../BrowserRouter/hooks'
import Menu from './Menu'

const Project = () => {
  const s = useSearchParams()
  return (
    <>
      <Menu />
      <h2>Project:{s.get('id')} </h2>
    </>
  )
}

export { Project }
