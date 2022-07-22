import React from 'react'
import logo from "../../logo.png"
import "./Header.css"
import {Link, useNavigate, useHistory} from "react-router-dom"
import {FaSearch} from 'react-icons/fa'
import { logout } from '../../Features/UserSlice'
import { useDispatch } from 'react-redux'
import { auth } from '../../firebase'
import {CgProfile} from 'react-icons/cg'
const Header = () => {
  
  const dispatch=useDispatch();
  const navigate=useNavigate();
  // const history = useHistory();

  const pushtoprofile=async(e)=>{
    e.preventDefault();
    navigate("/profile");
  }
  const pushtohome=async(e)=>{
    e.preventDefault();
    navigate("/");
  }

  return (
    <nav className="header">
        <img onClick={pushtohome} src={logo} alt="logo" />
        <div>
          <Link to="/TV Shows">TV Shows</Link>
          <Link to="/Movies" >Movies</Link>
          <Link to="/Recently added">Recently Added</Link>
          <Link to="/My list">My List</Link>
        </div>
        <CgProfile onClick={pushtoprofile}/>
    </nav>
  )
}

export default Header
