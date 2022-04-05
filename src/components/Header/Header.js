import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import img from '../Images/tech-boss.jpg'
const Header = () => {
    return (
        <div className='header-container'>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <div className='custom-link'>
                <CustomLink className='link-item' to="/home">HOME </CustomLink>
                <CustomLink className='link-item' to="/reviews">REVIEWS </CustomLink>
                <CustomLink className='link-item' to="/dashboard">DASHBOARD </CustomLink>
                <CustomLink className='link-item' to="/blogs">BLOGS </CustomLink>
                <CustomLink className='link-item' to="/about">ABOUT </CustomLink>
            </div>
        </div>
    );
};

export default Header;