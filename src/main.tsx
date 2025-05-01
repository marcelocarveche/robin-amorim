import ReactDOM from 'react-dom/client'
import '@/app/presentation/styles/global.module.scss'
import AppRoutes from '@/app/infrastructure/routes/routes'
import GlobalProvider from '@/app/infrastructure/providers/global-provider'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')
if (rootElement) {
  console.log('Renderizando aplicação dentro do BrowserRouter')
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <GlobalProvider>
        <AppRoutes />
      </GlobalProvider>
    </BrowserRouter>
  )
} else {
  console.error('Root element not found')
}
