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
        user? <h1>Hello {user.email}</h1>
        : <h2>Welcome to Blogs</h2>
      }
    </div>
  )
}

export default Blogs