import React from 'react';
import './HomeReview.css';
import { FaStarHalfAlt } from 'react-icons/fa';
import { AiTwotoneStar, } from 'react-icons/ai';

const HomeReview = (props) => {
    const { name, pic, feedback, ratting } = props.review;
    return (
        <div className='review-container'>
            <div className='grid justify-center'>
                <img className='rounded-full' src={pic} alt="" />
            </div>
            <p className='grid justify-center text-3xl'>{name}</p>
            <p className='flex justify-center'>
                <AiTwotoneStar className='text-yellow-500 text-2xl' />
                <AiTwotoneStar className='text-yellow-500 text-2xl' />
                <AiTwotoneStar className='text-yellow-500 text-2xl' />
                <AiTwotoneStar className='text-yellow-500 text-2xl' />
                <FaStarHalfAlt className='text-yellow-500 text-2xl' />
            </p>
            <p className='grid justify-center text-2xl'>{ratting}</p>
            <p>{feedback}</p>
        </div>
    );
};

export default HomeReview;