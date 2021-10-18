import React from 'react';
import "./NotFound.css"
import notfound from '../../../src/components/Home/images/404.jpg'

const NotFound = () => {
    return (
        <div className='notfound'>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;