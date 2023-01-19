import React from 'react'
import './css/style.css'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './pages/Home/components/ScrollToTop/ScrollToTop'

import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
