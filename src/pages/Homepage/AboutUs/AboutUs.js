import React from 'react'
import './AboutUs.css';
import about1 from '../../../assets/images/about-1.jpg';
import about3 from '../../../assets/images/about-3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirFreshener, faLightbulb, faTools } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    return (
        <div className='about-container'>
            <div className='about-img'>
                <img src={about3} alt="" />
                <img src={about1} alt="" />
            </div>
            <div className='about-text'>
                <h2>Why Adornment?</h2>
                <div className='about-point'>
                    <div>
                        <FontAwesomeIcon className='icon-point' icon={faTools} />
                    </div>
                    <div>
                        <h3>Elegant Design</h3>
                        <p>We provide Elegatnt and Sofisticated Design to you. We have a reputation for providing high class design</p>
                    </div>
                </div>
                <div className='about-point'>
                    <div>
                        <FontAwesomeIcon className='icon-point' icon={faLightbulb} />
                    </div>
                    <div>
                        <h3>Luminous Lightening</h3>
                        <p>To match the mood you need best lighting in your place. So we provide the best lighting to your design</p>
                    </div>
                </div>
                <div className='about-point'>
                    <div>
                        <FontAwesomeIcon className='icon-point' icon={faAirFreshener} />
                    </div>
                    <div>
                        <h3>Practicallity and Functionality</h3>
                        <p>Great Design requires a good practical perception. So, we are working toward that.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs