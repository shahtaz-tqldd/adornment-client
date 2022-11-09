import React from 'react'
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import './Homepage.css';

const Homepage = () => {
  return (
    <>
      <section className='banner-bg'>
        <Banner />
      </section>
      
      <div className='container'>
        <AboutUs />

        <div>
          <h1>Services</h1>
          <p>Following services you can get from adornment</p>
        </div>
      </div>
    </>
  )
}

export default Homepage