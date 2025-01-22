// import { useParams, useSearchParams } from 'react-router'
import Menu from '../components/Menu'

export default function Page2() {
  // const { param1 } = useParams()
  // const [searchParams] = useSearchParams()
  return (
    <div>
      <Menu />
      <h1>Page2</h1>
      {/* <h2>param1:{param1}</h2>
      <h3>searchParams.get('q'):{searchParams.get('q')}</h3> */}
    </div>
  )
}
