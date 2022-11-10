import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/icons/logo.png';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut =()=>{
    logOut()
      .then(()=>{})
      .catch(err=>console.error(err))
  }
  return (
    <nav>
      <div className='nav-container'>

        <div className='toggle-icon' onClick={() => setOpen(!open)}>
          {open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
        </div>

        <div className='nav-logo'>
          <Link to='/'>
            <img src={logo} alt="adornment logo"></img>
            <h2>adornment</h2>
          </Link>
        </div>

        <div className={`nav-items ${open ? 'shown' : 'hide'}`}>
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/faq'>FAQ</Link>
          <Link to='/blogs'>Blogs</Link>
        </div>

        <div className='nav-items2'>
          {
            user ? <div onClick={handleLogOut}>Logout</div>
              : <>
                <Link to='/login'>Sign In</Link>
                <Link to='/sign-up'>Sign Up</Link>
              </>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar