import { useParams } from 'react-router'

const EditProject = () => {
  const { pid } = useParams()
  return <h2>EditProject: {pid}</h2>
}

export { EditProject }
