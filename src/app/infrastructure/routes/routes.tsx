import { Route, Routes as Router } from 'react-router-dom'
import HomePage from '@/app/presentation/pages/home/home'
import { Teste } from '@/app/presentation/pages/case-studies/teste'
import { Routes } from '@/app/presentation/protocols'
import { ReducingTeacherWorkload } from '@/app/presentation/pages'

const AppRoutes = () => {
  return (
    <Router>
      <Route path={Routes.home} element={<HomePage />} />
      <Route path={Routes.notFound} element={<HomePage />} />
      <Route
        path={Routes.caseStudies.reducingTeacherWorkload}
        element={<ReducingTeacherWorkload />}
      />
    </Router>
  )
}

export default AppRoutes
