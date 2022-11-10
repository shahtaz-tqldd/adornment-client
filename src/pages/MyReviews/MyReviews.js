import React, { useContext, useEffect, useState } from 'react'
import Review from '../../components/Review/Review'
import { AuthContext } from '../../context/AuthProvider'

const MyReviews = () => {
  const { user } = useContext(AuthContext)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const url = `https://adornment-server.vercel.app/my-reviews?email=${user.email}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setReviews(data)
      })
      .catch(err => console.error(err))
  }, [user.email])

  const handleDeleteButton = (id) => {
    fetch(`https://adornment-server.vercel.app/reviews/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          const remaining = reviews.filter(rev => rev._id !== id);
          setReviews(remaining)
        }
      })
      .catch(err => console.error(err))
  }

  const handleUpdateButton = (e, id) =>{
    e.preventDefault()
    const form = e.target;
    const text = form.reviewBody.value
    
    fetch(`https://adornment-server.vercel.app/reviews/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({reviewText: text})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount > 0){
          const remaining = reviews.filter(rev=> rev._id !== id)
          const updated = reviews.find(rev=> rev._id === id)
          updated.reviewText = text;
          const newReviews = [...remaining, updated]
          setReviews(newReviews)
        }
    })
  }
  return (
    <div className='container'>
      <h1 style={{ margin: "30px 0", color: "var(--color-blue)" }}>My Reviews </h1>
      {
        reviews.map(review => <Review key={review.service} review={review} handleDeleteButton={handleDeleteButton} handleUpdateButton={handleUpdateButton} />)
      }
    </div>
  )
}

export default MyReviews