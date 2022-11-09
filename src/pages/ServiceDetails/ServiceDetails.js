import { faCircleCheck, faClock, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import plant from '../../assets/images/plant.png'
import profile from '../../assets/icons/profile.png'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import './ServiceDetails.css'
import useTitle from '../../assets/hooks/useTitle'

const ServiceDetails = () => {
    const serviceDetails = useLoaderData()
    const { serviceName, images, duration, description, cost, features } = serviceDetails
    useTitle(`- ${serviceName}`)
    const { img1, img2, img3, img4 } = images
    return (
        <div className='container service-details'>
            <Link to='/services'><FontAwesomeIcon icon={faArrowLeftLong} /> &nbsp; Go Back to Services</Link>
            <div className='service-details-head'>
                <div>
                    <h1>{serviceName}</h1>
                    <p><span>BDT {cost}</span> per square feet</p>
                    <p><FontAwesomeIcon icon={faClock} /> &nbsp;Time Required: {duration}</p>
                </div>
                <img src={img1} alt="" />
            </div>
            <div className='description'>
                <h2 className='h-2'>Description</h2>
                <div className='descrip'>
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                    <div className='live'>
                        <img src={plant} alt=""/>
                        <h4 style={{color:'#009eb3'}} className='center'>Live By the Beauty</h4>
                    </div>
                </div>
            </div>
            <h2 className='h-2'>Some of Our Design</h2>
            <div className='services-img'>
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
            <div className='features'>
                <h2 className='h-2'>Features</h2>
                <ul>
                    {features.map(feature => <li><FontAwesomeIcon icon={faCircleCheck} /> {feature}</li>)}
                </ul>
            </div>

            {/* review Section */}
            <div>
                <h2 className='h-3'>Reviews</h2>
                <div className='review-container'>
                    <div className='review'>
                        <img src={profile} alt=""/>
                        <div>
                            <h3>User Name</h3>
                            <p>Comments on this project is very good!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails