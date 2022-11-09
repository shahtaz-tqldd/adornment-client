import React from 'react'
import useTitle from '../../assets/hooks/useTitle'
import '../Login/Login.css';
import login from '../../assets/images/signup.png'
import google from '../../assets/icons/google.png';
import facebook from '../../assets/icons/facebook.png';
import github from '../../assets/icons/github.png';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
  useTitle('- SignUp')
  return (
    <div className='container login-container'>
      <div className="login-img">
        <img src={login} alt="login to adornment" />
      </div>
      <div className='login-form-container'>
        <h2 className='center mb-10'>Sign Up</h2>
        <form>
          <FontAwesomeIcon className='login-icon' icon={faUser} />
          <input type="email" name="email" id="" placeholder='username@email.com' /> <br />
          
          <FontAwesomeIcon className='login-icon' icon={faUserCircle} />
          <input type="text" name="password" id="" placeholder='John Doe' /> <br />
          
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