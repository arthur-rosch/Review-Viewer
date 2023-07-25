import { Form } from './pages/Form'
import { Routes, Route } from 'react-router-dom'
import { ListComments } from './pages/ListComments'
import { ChoosePlatform } from './pages/ChoosePlatform'

export function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/ChoosePlatform" element={<ChoosePlatform />} />
      <Route path="/ListComments" element={<ListComments />} />
    </Routes>
  )
}
