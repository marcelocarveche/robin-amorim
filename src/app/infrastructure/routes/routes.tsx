import { Route, Routes as Router } from 'react-router-dom'
import HomePage from '@/app/presentation/pages/home/home'
import { Teste } from '@/app/presentation/pages/case-studies/teste'
import { Routes } from '@/app/presentation/protocols'
import { ReducingTeacherWorkload, Ecommerce } from '@/app/presentation/pages'

const AppRoutes = () => {
  return (
    <Router>
      <Route path={Routes.home} element={<HomePage />} />
      <Route path={Routes.notFound} element={<HomePage />} />
      <Route
        path={Routes.caseStudies.reducingTeacherWorkload.url}
        element={<ReducingTeacherWorkload />}
      />
      <Route path={Routes.caseStudies.ecommerce.url} element={<Ecommerce />} />
    </Router>
  )
}

export default AppRoutes
