import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './pages/sidebar'
export default function App() {
  return (
    <Routes>
      <Route path='/sidebar' element={<Sidebar />} />
      <Route path='/dashboard' element={<Sidebar />} />
      <Route path='/profile' element={<Sidebar />} />
      <Route path='/logout' element={<Sidebar />} />
    </Routes>
  )
}
