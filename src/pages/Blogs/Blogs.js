import React, { useContext } from 'react'
import useTitle from '../../assets/hooks/useTitle'
import { AuthContext } from '../../context/AuthProvider'
import './Blogs.css'

const Blogs = () => {
  useTitle('- Blogs')
  const {user} = useContext(AuthContext)
  return (
    <div className='container'>
      {
        user? <div>
          <h1>Hello {user.displayName}</h1>
          <img style={{height:"100px", width:"100px", objectFit:"cover", borderRadius:"50%"}} src={user.photoURL} alt=""></img>
          
          </div>
        : <h2>Welcome to Blogs</h2>
      }
    </div>
  )
}

export default Blogs