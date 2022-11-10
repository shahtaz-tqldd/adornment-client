import { faCircleCheck, faClock, faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import plant from '../../assets/images/plant.png'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import './ServiceDetails.css'
import useTitle from '../../assets/hooks/useTitle'
import { AuthContext } from '../../context/AuthProvider'

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext)
    const serviceDetails = useLoaderData()
    const { serviceName, images, duration, description, cost, features, _id } = serviceDetails
    const { img1, img2, img3, img4 } = images

    useTitle(`- ${serviceName}`)

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])


    const handleReview = e => {
        e.preventDefault()
        const form = e.target
        const reviewBody = form.reviewBody.value;
        const review = {
            service: _id,
            nameService: serviceName,
            serviceImg: img1,
            cost,
            reviewUser: user.displayName,
            reviewUserImg: user.photoURL,
            reviewText: reviewBody
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                }
            })
    }

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
                        <img src={plant} alt="" />
                        <h4 style={{ color: '#009eb3' }} className='center'>Live By the Beauty</h4>
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
                    {
                        reviews.map(review => {
                            if (review.service === _id) {
                                return (
                                    <div className='review'>
                                        <img src={review.reviewUserImg} alt="" />
                                        <div>
                                            <h3>{review.reviewUser}</h3>
                                            <p>{review.reviewText}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                </div>
                <div className='add-comment'>
                    {
                        user ?
                            <form onSubmit={handleReview}>
                                <label>Add a review</label><br />
                                <textarea id='review' name='reviewBody' placeholder='Enter Your Review' required /> <br />
                                <input className="submit" type="submit" value="submit" />
                            </form>
                            : <p>Please Login to add a review  <br /> <small><Link to='/login'><FontAwesomeIcon icon={faArrowRightLong} /> Login Here</Link></small></p>
                    }
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails