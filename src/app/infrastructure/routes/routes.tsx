import { Route, Routes } from 'react-router-dom'
import HomePage from '@/app/presentation/pages/home/home'
import { Teste } from '@/app/presentation/pages/teste/teste'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/teste" element={<Teste />} />
    </Routes>
  )
}

export default AppRoutes
