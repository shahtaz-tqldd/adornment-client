import React from 'react'
import useTitle from '../../assets/hooks/useTitle';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import './Homepage.css';

const Homepage = () => {
  useTitle('')
  const services = [
    { _id: 1, name: 'home' },
    { _id: 2, name: 'offie' },
    { _id: 3, name: 'kitchen' },
    { _id: 4, name: 'restaurant' },
    { _id: 5, name: 'events' },
    { _id: 6, name: 'conference room' },
  ]
  return (
    <>
      <section className='banner-bg'>
        <Banner />
      </section>

      <div className='container'>
        <AboutUs />

        <div className='center home-services'>
          <h1>Services</h1>
          <p>Following services you can get from adornment</p>

          <div className='service-card-container'>
            {
              services.map(service => <ServiceCard key={service._id} service={service} />)
            }

          </div>
        </div>

        <div className='want-design'>
          <div>
            <p>Do you need to an</p>
            <h1>Interior Designer?</h1>
          </div>
          <button className='btn-contact'>Contact Me</button>
        </div>
      </div>
    </>
  )
}

export default Homepage