import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({service}) => {
    const {name} = service
  return (
    <div className='service-card'>
        {name}
    </div>
  )
}

export default ServiceCard