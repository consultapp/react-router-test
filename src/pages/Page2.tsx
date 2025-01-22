import { useSearchParams } from '../BrowserRouter/hooks'
import Menu from '../components/Menu'

export default function Page2() {
  const searchParams = useSearchParams()
  return (
    <div>
      <Menu />
      <h1>Page2</h1>
      <h3>searchParams.get('q'):{searchParams.get('q')}</h3>
    </div>
  )
}
