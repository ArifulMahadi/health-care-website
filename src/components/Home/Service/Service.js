import React from 'react';
import './service.css'

const Service = (props) => {
    console.log(props.service)
    const {images, specialist,description} = props.service
    return (
        <div className="service-container">
          <div className="images">
          <img src={images} alt="" />
          </div>
            <div className="description">
            <h2>{specialist}</h2>
           <p>{description}</p>
            </div>
            <div className='detail-button'>
                <button>details</button>
            </div>
        </div>
    );
};

export default Service;