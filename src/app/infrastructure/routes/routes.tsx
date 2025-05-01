import { BrowserRouter, Route, Routes as Router } from 'react-router-dom'
import HomePage from '@/app/presentation/pages/home/home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<HomePage />} />
      </Router>
    </BrowserRouter>
  )
}

export default Routes
