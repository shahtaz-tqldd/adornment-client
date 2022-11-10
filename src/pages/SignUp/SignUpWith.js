import React, { useContext } from 'react'
import '../Login/Login.css';
import google from '../../assets/icons/google.png';
import facebook from '../../assets/icons/facebook.png';
import github from '../../assets/icons/github.png';
import { AuthContext } from '../../context/AuthProvider';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignUpWith = () => {
    const navigate = useNavigate()
    const {popUpSignIn} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const popWith = (provider) =>{
        popUpSignIn(provider)
        .then(result=>{
            const user = result.user;
            console.log(user)
            navigate('/')
        })
        .catch(err=>console.error(err))
    }
    const handleGoogleSignIn =()=>{
        popWith(googleProvider)
    }

    const handleFacebookSignIn =()=>{
        popWith(facebookProvider)
    }

    const handleGithubSignIn =()=>{
        popWith(githubProvider)
    }
    return (
        <div className='login-social'>
            <span onClick={handleGoogleSignIn}><img src={google} alt="login with google" /></span>
            <span onClick={handleFacebookSignIn}><img src={facebook} alt="login with facebook" /></span>
            <span onClick={handleGithubSignIn}><img src={github} alt="login with github" /></span>
        </div>
    )
}

export default SignUpWith

