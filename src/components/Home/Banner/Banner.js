import React from 'react';
import img from '../../../components/Home/images/DSC_1130-1280x640.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <img src={img} alt="" />
        </div>
    );
};

export default Banner;