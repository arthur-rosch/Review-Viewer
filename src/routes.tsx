import { ChoosePlatform } from './pages/ChoosePlatform'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'

export function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ChoosePlatform" element={<ChoosePlatform />} />
    </Routes>
  )
}
