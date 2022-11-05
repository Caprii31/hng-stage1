import { useState } from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
