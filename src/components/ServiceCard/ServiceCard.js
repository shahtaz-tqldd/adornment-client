import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import './ServiceCard.css'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { serviceName, images, duration, _id, cost, description } = service
  const { img2 } = images
  return (
    <div className='service-card'>
      <img src={img2} alt="home-interior" />
      <div className='card-info'>
        <h3>{serviceName}</h3>
        <p className='mt-10'><FontAwesomeIcon icon={faClock} /> &nbsp;{duration}</p>
        <p className='mt-10'><b>BDT {cost}</b> <small>per square feet</small></p>
        <p className='mt-10'>{description.slice(0,100)+' ...'}</p>
        <div><Link to={`/services/${_id}`}>See Details</Link></div>
      </div>
    </div>
  )
}

export default ServiceCard