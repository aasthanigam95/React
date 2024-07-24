import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div id='nav'>
        <Link to={'/home'}>
        <span>Home</span>
        </Link>
    <Link to={'/about'}>
        <span>About</span>
        </Link>
        <Link to={'/contact'}>
        <span>Contact</span>
        </Link>
    </div>
  )
}

export default NavBar