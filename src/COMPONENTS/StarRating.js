import React from 'react';

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const filledStars = Math.round(rating / 2); // Assuming rating is out of 10, convert to 5 stars

  return (
    <div className="star-rating">
      {[...Array(maxStars)].map((star, index) => (
        <span key={index} className={index < filledStars ? 'filled-star' : ''}>
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;