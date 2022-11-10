import React, { useContext } from 'react'
import useTitle from '../../assets/hooks/useTitle'
import '../Login/Login.css';
import login from '../../assets/images/signup.png'
import google from '../../assets/icons/google.png';
import facebook from '../../assets/icons/facebook.png';
import github from '../../assets/icons/github.png';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faLock, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
  useTitle('- SignUp')
  const {createUser} = useContext(AuthContext)

  // form sign up
  const handleSignUp = e =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const photoURL = form.photoURL.value
    const password1 = form.password1.value
    const password2 = form.password2.value

    createUser(email, password1)
      .then(result=>{
        const user = result.user;
        console.log(user)
        form.reset()
      })
      .catch(err=> console.error(err))

  }

  return (
    <div className='container login-container'>
      <div className="login-img">
        <img src={login} alt="login to adornment" />
      </div>
      <div className='login-form-container'>
        <h2 className='center mb-10'>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <FontAwesomeIcon className='login-icon' icon={faUser} />
          <input type="email" name="email" id="" placeholder='username@email.com' /> <br />
          
          <FontAwesomeIcon className='login-icon' icon={faUserCircle} />
          <input type="text" name="name" id="" placeholder='Enter Your Name' /> <br />
          
          <FontAwesomeIcon className='login-icon' icon={faCamera} />
          <input type="text" name="photoURL" id="" placeholder='photo url' /> <br />
          
          <FontAwesomeIcon className='login-icon' icon={faLock} />
          <input type="password" name="password1" id="" placeholder='password' /> <br />
          
          <FontAwesomeIcon className='login-icon' icon={faLock} />
          <input type="password" name="password2" id="" placeholder='confirm password' /> <br />
          <input className='btn-login' type="submit" value="Sign Up" />
        </form>
        <div className='hr-line'>
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <h3 className='center mb-10'>Sign Up With</h3>
        <div className='login-social'>
          <span><img src={google} alt="login with google" /></span>
          <span><img src={facebook} alt="login with facebook" /></span>
          <span><img src={github} alt="login with github" /></span>
        </div>
        <p className='sign-up'>Already have an Account? <Link to='/login'>Login Here</Link></p>
      </div>
    </div>
  )
}

export default SignUp