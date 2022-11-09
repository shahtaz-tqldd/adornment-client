import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({service}) => {
    const {serviceName} = service
  return (
    <div className='service-card'>
        {serviceName}
    </div>
  )
}

export default ServiceCard