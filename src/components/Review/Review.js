import React from 'react'
import './Review.css';

const Review = ({ review, handleDeleteButton }) => {
    const { nameService, serviceImg, cost, reviewText, _id } = review
    
    const handleDelete =()=>{
        handleDeleteButton(_id)
    }
    
    return (
        <div className='my-review-container'>
            <div className='review-img'>
                <img src={serviceImg} alt="" />
            </div>
            <div className='review-text'>
                <h1>{nameService}</h1>
                <p>BDT {cost} per square feet</p>
                <p><small>My Review</small> <br />{reviewText}</p>
                <div className='btn-edit-delete'>
                    <button>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Review