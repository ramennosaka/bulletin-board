import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailBulletinBoard from './pages/DetailBulletinBoard'
import BulletinBoard from './pages/BulletinBoard'
import BulletinEditor from './pages/BulletinEditor'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BulletinBoard />} />
        <Route path="/detail/:id" element={<DetailBulletinBoard />} />
        <Route path="/editor" element={<BulletinEditor />} />
        <Route path="/editor/:id" element={<BulletinEditor />} />
      </Routes>
    </BrowserRouter>)
}

export default App
