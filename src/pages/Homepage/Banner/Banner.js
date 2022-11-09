import React from 'react'
import './Banner.css'
import banner from '../../../assets/images/banner-img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <div className='container banner-container'>
            <div className='banner-text'>
                <h1>
                    Get amazing <span>Interior Design</span><br />
                    at reasonable price from<br />
                    <span>Adornment</span> Interior Solution
                </h1>
                <button>Get Started &nbsp;<FontAwesomeIcon className='btn-icon' icon={faArrowRightLong} /></button>
            </div>
            <div className='banner-img'>
                <img src={banner} alt="adornment" />
            </div>
        </div>
    )
}

export default Banner