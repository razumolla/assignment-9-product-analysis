import React from 'react';
import './HomeReview.css';

const HomeReview = (props) => {
    const { name, pic, feedback, ratting } = props.review;
    return (
        <div className='review-container'>
            <div className='grid justify-center'>
                <img className='rounded-full' src={pic} alt="" />
            </div>
            <p className='grid justify-center text-3xl'>{name}</p>
            <p className='grid justify-center text-2xl'> Ratting:{ratting}</p>
            <p>{feedback}</p>
        </div>
    );
};

export default HomeReview;