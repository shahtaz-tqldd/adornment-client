import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import './Review.css';

const Review = ({ review, handleDeleteButton, handleUpdateButton }) => {
    const { nameService, serviceImg, cost, reviewText, _id } = review
    const [edit, setEdit] = useState(false)

    const handleDelete = () => {
        handleDeleteButton(_id)
    }


    const handleUpdate = (e) =>{
        handleUpdateButton(e, _id)
        setEdit(false)
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
                    <button onClick={() => setEdit(!edit)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
                {
                    edit ?
                        <div className='edit'>
                            <FontAwesomeIcon className='close-icon' onClick={() => setEdit(!edit)} icon={faXmark}/>
                            <p>Edit Your Review</p>
                            <form onSubmit={handleUpdate}>
                                <textarea id='review' className='edit-text' name='reviewBody' defaultValue={reviewText} /> <br />
                                <input className="submit" type="submit" value="submit" />
                            </form>
                        </div>
                    :<span></span>    
            }

            </div>
        </div>
    )
}

export default Review