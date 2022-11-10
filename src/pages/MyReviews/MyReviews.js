import React, { useContext, useEffect, useState } from 'react'
import Review from '../../components/Review/Review'
import { AuthContext } from '../../context/AuthProvider'

const MyReviews = () => {
  const { user } = useContext(AuthContext)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const url = `http://localhost:5000/my-reviews?email=${user.email}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setReviews(data)
      })
      .catch(err => console.error(err))
  }, [user.email])

  const handleDeleteButton = (id) =>{
    fetch(`http://localhost:5000/reviews/${id}`, {
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        const remaining = reviews.filter(rev => rev._id !== id);
        setReviews(remaining)
      }})
    .catch(err=>console.error(err))
}
  return (
    <div className='container'>
      <h1 style={{ margin: "30px 0", color: "var(--color-blue)" }}>My Reviews </h1>
      {
        reviews.map(review => <Review key={review.service} review={review} handleDeleteButton={ handleDeleteButton} />)
      }
    </div>
  )
}

export default MyReviews