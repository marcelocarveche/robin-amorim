import HeaderAndFooter from '@/app/presentation/components/footer/header-footer'
import { createContext, useContext, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

// Define o tipo do contexto
type GlobalContextType = {}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const useGlobalProvider = (): GlobalContextType => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalProvider must be used within a GlobalProvider')
  }
  return context
}

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/teste')
  }

  return (
    <GlobalContext.Provider value={{}}>
      <HeaderAndFooter>{children}</HeaderAndFooter>
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
