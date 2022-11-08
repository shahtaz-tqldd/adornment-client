import React from 'react'
import './Banner.css'
import banner from '../../../assets/images/banner-img.png';

const Banner = () => {
    return (
        <div className='container banner-container'>
            <div className='banner-text'>
                <h1>
                    Get Amazing Interior Design<br />
                    at Reasonable Price from<br />
                    <span>Adornment Interior Solution</span>
                </h1>
            </div>
            <div className='banner-img'>
                <img src={banner} alt="adornment" />
            </div>
        </div>
    )
}

export default Banner