import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'

const App = () => {
  return (
    <>
    <main>
    <Header />
    <Routes>
      <Route path='/BilalDevs-Website/' element={<Home />} />
      <Route path='/BilalDevs-Website/portfolio' element={<Portfolio />} />
    </Routes>
    </main>
    </>
  )
}

export default App