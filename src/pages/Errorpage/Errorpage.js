import React from 'react';
import './Errorpage.css';
import { Link } from 'react-router-dom';
import errorIcon from '../../assets/images/error.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import useTitle from '../../assets/hooks/useTitle';

const Errorpage = () => {
  useTitle('- 404 Error')
  return (
    <div className='errorpage-container'>
      <img src={errorIcon} alt="this page is not found!" />
      {/* <h1>404<br/><small>Page Not Found</small></h1> */}
      <p>Sorry! We could't find the page you have requested. Maybe the page is broken or the link you are looking for is incorrect.</p>
      <p>
        <Link to='/'>
          <FontAwesomeIcon className='icon' icon={faArrowLeftLong} />
          &nbsp; Go Back to Homepage</Link>
      </p>
    </div>
  )
}

export default Errorpage