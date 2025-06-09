
import React, { useState } from 'react'
import Home from '../Pages/Home'
import { Link , NavLink} from 'react-router-dom'


const Navbar = ({ toggleDarkMode }) => {
  return (
    <div className='navbar-list d-flex justify-content-between align-items-center px-4 py-2 bg-light shadow-sm'>
        <ul className=' d-flex list-unstyled gap-4 mb-0'>
       <li> <NavLink className='text-decoration-none text-dark fw-semibold' to='/'>Home</NavLink></li>
        <li><NavLink className='text-decoration-none text-dark fw-semibold' to='/about'>About</NavLink></li>
        <li><NavLink className='text-decoration-none text-dark fw-semibold' to='/contact'>Contact</NavLink></li>
        <li><NavLink className='text-decoration-none text-dark fw-semibold' to='/cart'>Cart</NavLink></li>
        </ul>
        <button className='btn btn-primary'>Log in</button>
        <button className='btn btn-dark' onClick={toggleDarkMode}>Dark Mode</button>
    </div>
  
  )
}

export default Navbar
