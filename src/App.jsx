
import React, { useState } from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import PageNotFound from './Pages/PageNotFound'

const App = () => {
  const [darkMode,setDarkMode]=useState(false)
  const toggleDarkMode=()=>{
    setDarkMode(prev=>!prev)
  }
  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>

    
    <div className='container-fluid'>
      <Navbar toggleDarkMode={toggleDarkMode}/>
      <Routes>
        <Route path='/' element={<Home darkMode={darkMode}/>}/>
        <Route path='/about' element={<About darkMode={darkMode}/>}/>
        <Route path='/contact' element={<Contact darkMode={darkMode}/>}/>
        <Route path='/cart' element={<Cart darkMode={darkMode}/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default App
