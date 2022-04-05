import React from 'react';
import useReviews from '../../hooks/useReview';
import ReviewAll from '../ReviewAll/ReviewAll';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews([])
    return (
        <div className='reviews-container'>
            {
                reviews.map(review => <ReviewAll
                    key={review.id}
                    review={review}
                ></ReviewAll>)
            }
        </div>
    );
};

export default Reviews;