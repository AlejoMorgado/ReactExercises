import React from 'react';
import reviews from '../tools/reviews';
import '../styles/review.css'

const Review = ({content}) => {
  return (
    <div className='reviewContainer'>
        <h1>{content}:</h1>
      {reviews.map((review, index) => (
        <div className='reviewInformation' key={index}>
          <h3>{review.sneakerReview}:</h3>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
