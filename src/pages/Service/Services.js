import React from 'react'
import { useLoaderData } from 'react-router-dom'
import useTitle from '../../assets/hooks/useTitle'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import './Services.css'

const Services = () => {
    useTitle('- Services')
    const services = useLoaderData()
    return (
        <div className='container service-card-container'>
            {
                services.map(service => <ServiceCard key={service._id} service={service} />)
            }

        </div>
    )
}

export default Services