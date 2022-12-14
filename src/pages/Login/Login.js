import React, { useContext, useState } from 'react'
import useTitle from '../../assets/hooks/useTitle'
import './Login.css'
import login from '../../assets/images/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faWarning } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/AuthProvider';
import SignUpWith from '../SignUp/SignUpWith'

const Login = () => {
  useTitle('- Login')
  const [error, setError] = useState('')
  const { loginUser } = useContext(AuthContext)

  const navigate = useNavigate();
  const location = useLocation()

  const from = location.state?.from?.pathname || '/' ;

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value
    const password = form.password.value

    loginUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('')
        form.reset()
        navigate(from, {replace: true})
      })
      .catch(err => {
        console.error(err)
        if (err.message === 'Firebase: Error (auth/user-not-found).') {
          setError('This user is not registered')
        }
        else (setError(err.message))
      })
  }
  return (
    <div className='container login-container'>
      <div className="login-img">
        <img src={login} alt="login to adornment" />
      </div>
      <div className='login-form-container'>
        <h2 className='center mb-10'>Login</h2>

        <form onSubmit={handleLogin}>
          <FontAwesomeIcon className='login-icon' icon={faUser} />
          <input type="email" name="email" id="" placeholder='username@email.com' /> <br />

          <FontAwesomeIcon className='login-icon' icon={faLock} />
          <input type="password" name="password" id="" placeholder='password' /> <br />

          <Link to='/forget-password'><small>Forgot Password?</small></Link>
          <input className='btn-login' type="submit" value="Login" />
          {
            error ?
              <div className='error-message'>
                <small><FontAwesomeIcon icon={faWarning} /> {error}</small>
              </div>
              : <span></span>
          }
        </form>

        <div className='hr-line'>
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <h3 className='center mb-10'>Login With</h3>
        <SignUpWith />
        <p className='sign-up'>Don't have any Account? <Link to='/sign-up'>Register Now</Link></p>
      </div>
    </div>
  )
}

export default Login