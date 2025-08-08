import { Routes, Route, Navigate } from 'react-router-dom'
import Beranda from './pages/Beranda.jsx'
import Masuk from './pages/Masuk.jsx'
import Daftar from './pages/Daftar.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

export default function App() {
  return (
    <main className="flex-1">
      <Routes>
        <Route path="/" element={<Navigate to="/masuk" replace />} />
        <Route path="/masuk" element={<Masuk />} />
        <Route path="/daftar" element={<Daftar />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/beranda" element={<Beranda />} />
        </Route>

        <Route path="*" element={<Navigate to="/masuk" replace />} />
      </Routes>
    </main>
  )
}
