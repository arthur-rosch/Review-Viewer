import { ChoosePlatform } from './pages/ChoosePlatform'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { ListComments } from './pages/ListComments'

export function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ChoosePlatform" element={<ChoosePlatform />} />
      <Route path="/ListComments" element={<ListComments />} />
    </Routes>
  )
}
