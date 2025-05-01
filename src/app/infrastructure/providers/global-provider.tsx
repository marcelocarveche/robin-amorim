import { createContext, useContext } from 'react'

const GlobalContext = createContext({})

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider')
  }

  return context
}

import { ReactNode } from 'react'

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <GlobalContext.Provider value={GlobalContext}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
