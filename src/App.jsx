

import './App.css'
import { Route, Routes } from 'react-router-dom'

// component import
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import AboutUs from './Components/AboutUs'
import Client from './Components/Client'
import Contact from './Components/Contact'
import Services from './Components/Services'

function App() {

  return (
    <>
      <Navbar />
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/clients' element={<Client />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
