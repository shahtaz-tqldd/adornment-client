import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import './ServiceCard.css'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { serviceName, images, duration, _id } = service
  const { img2 } = images
  return (
    <div className='service-card'>
      <img src={img2} alt="home-interior" />
      <div className='card-info'>
        <h3>{serviceName}</h3>
        <p><small><FontAwesomeIcon icon={faClock} /> &nbsp;{duration}</small></p>
        <div><Link to={`/services/${_id}`}>See Details</Link></div>
      </div>
    </div>
  )
}

export default ServiceCard