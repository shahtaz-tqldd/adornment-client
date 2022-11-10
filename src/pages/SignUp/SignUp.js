import React, { useContext, useState } from 'react'
import useTitle from '../../assets/hooks/useTitle'
import '../Login/Login.css';
import login from '../../assets/images/signup.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faLock, faUser, faUserCircle, faWarning } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/AuthProvider';
import SignUpWith from './SignUpWith'

const SignUp = () => {
  useTitle('- SignUp')
  const {createUser, updateUserProfile} = useContext(AuthContext)
  const [error, setError] = useState('')

  // form sign up
  const handleSignUp = e =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const photoURL = form.photoURL.value
    const password1 = form.password1.value
    const password2 = form.password2.value

    if(password1 !== password2){
      setError(`Your Password Didn't Match`)
    }
    if(password1.length<6){
      setError(`Your Password is too small`)
    }
    if(password1.length >=6 && password1===password2){
      createUser(email, password1)
      .then(result=>{
        const user = result.user;
        console.log(user)
        setError('')
        form.reset()
        handeUpdateProfile(name, photoURL)
      })
      .catch(err=> {
        console.error(err)
        setError(err.message)
      })
  }
    }

 
  const handeUpdateProfile = (name, photoURL) =>{
    const profile = {
      displayName: name,
      photoURL : photoURL
    }
    updateUserProfile(profile)
      .then(()=>{})
      .catch(err=>console.error(err))
  }

  return (
    <div className='container login-container'>
      <div className="login-img">
        <img src={login} alt="login to adornment" />
      </div>
      <div className='login-form-container'>
        <h2 className='center mb-10'>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <FontAwesomeIcon className='login-icon' icon={faUserCircle} />
          <input type="text" name="name" id="" placeholder='Your Name' required/> <br />
          
          <FontAwesomeIcon className='login-icon' icon={faUser} />
          <input type="email" name="email" id="" placeholder='Your Email' required/> <br />
          
          <FontAwesomeIcon className='login-icon' icon={faCamera} />
          <input type="text" name="photoURL" id="" placeholder='photo url' required/> <br />
          
          <FontAwesomeIcon className='login-icon' icon={faLock} />
          <input type="password" name="password1" id="" placeholder='password' required/> <br />
          
          <FontAwesomeIcon className='login-icon' icon={faLock} />
          <input type="password" name="password2" id="" placeholder='confirm password' required/> <br />
          
          {
            error? 
            <div className='error-message'>
              <small><FontAwesomeIcon icon={faWarning} /> {error}</small>
            </div>
            :<span></span>
          }
          <input className='btn-login' type="submit" value="Sign Up" />
        </form>
        <div className='hr-line'>
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <h3 className='center mb-10'>Sign Up With</h3>
        <SignUpWith />
        <p className='sign-up'>Already have an Account? <Link to='/login'>Login Here</Link></p>
      </div>
    </div>
  )
}

export default SignUp