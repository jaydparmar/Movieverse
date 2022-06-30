import React from 'react'
import logo from "../../logo.png"
import "./Header.css"
import {Link} from "react-router-dom"
import {FaSearch} from 'react-icons/fa'
const Header = () => {
  return (
    <nav className="header">
        <img src={logo} alt="logo" />
        <div>
          <Link to="/TV Shows">TV Shows</Link>
          <Link to="/TV Shows">Movies</Link>
          <Link to="/TV Shows">Recently Added</Link>
          <Link to="/TV Shows">My List</Link>
        </div>
        <FaSearch/>
    </nav>
  )
}

export default Header
