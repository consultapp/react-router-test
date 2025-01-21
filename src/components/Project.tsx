import { useParams } from 'react-router'

const Project = () => {
  const { pid } = useParams()
  return <h2>Project: {pid}</h2>
}

export { Project }
