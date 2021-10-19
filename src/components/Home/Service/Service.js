import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'

const Service = (props) => {
    const { id,images, specialist,description} = props.service
    return (
        <div className="service-container" style={{color:"white"}}>
          <div className="images">
          <img src={images} alt="" />
          </div>
            <div className="description">
            <h2>{specialist}</h2>
           <p>{description}</p>
            </div>
            <div className='detail-button'>
               <Link to={`/details/${id}`}>
               <button style={{border:'none',padding:"15px",borderRadius:"15px",backgroundColor:"whitesmoke"}}>{specialist} details</button>
               </Link>
            </div>
        </div>
    );
};

export default Service;