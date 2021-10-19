import React from 'react';

const SingleService = (props) => {
    console.log(props.service)
    const {picure,description,name} = props.service;
    return (
        <div className='service-container'>
            <div className='images'>
                <img src={picure} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleService;