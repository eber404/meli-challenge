import { Providers } from '@/hooks'
import { AppRoutes as Routes } from '@/routes'

function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  )
}

export default App
