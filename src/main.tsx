import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from '@/app/infrastructure/routes/routes'
import GlobalProvider from '@/app/infrastructure/providers/global-provider'

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </React.StrictMode>
  )
} else {
  console.error('Root element not found')
}
