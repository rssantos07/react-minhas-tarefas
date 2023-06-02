import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import EstiloGlobal, { Container } from './styles'
import store from './store'
import Home from './store/Pages/Home'
import Cadastro from './store/Pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
