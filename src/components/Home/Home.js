import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReview';
import HomeReview from '../HomeReview/HomeReview';
import img from '../Images/apple.jpg'
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews([])
    return (
        <div>
            <div className='home-container'>
                <div className='pt-20'>
                    <h1 className='text-6xl font-bold text-pink-500  '>TECH BOSS  <small className='text-xl'>Mac Studio</small> </h1>
                    <p className='mt-6 text-xl pr-10 pb-6'>
                        They make its laptops both more powerful and more power-efficient, meaning greatly improved performance and battery life. Plus, you get other perks, like the ability to run mobile apps originally made for iOS.
                    </p>
                    <Link to="/new-laptop">
                        <button className='text-2xl bg-gray-200 text-blue-800 p-1 rounded'>
                            Buy Now</button>
                    </Link>
                </div>
                <div className='img-laptop'>
                    <img src={img} alt="" />
                </div>
            </div>

            <div>
                <h1 className='text-3xl font-bold text-center '>Customer Reviews(3)</h1>
                <div>
                    {
                        reviews.slice(0, 3).map(review => <HomeReview key={review.id} review={review}> </HomeReview>)
                    }

                </div>
                <div className='grid justify-items-center'>
                    <Link to="/reviews">
                        <button className='text-xl pl-10 pr-10 rounded-xl bg-blue-700 text-white mb-7'>
                            See All Reviews
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;