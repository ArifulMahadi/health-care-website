import React from 'react';
import { useState,useEffect } from 'react';
import SingleService from '../SingleServices/SingleService';


const Servicess = () => {
    const [services,setServices] = useState([]);
    useEffect( () => {
        fetch('./servicess.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div className='services'>
            <h1 style={{backgroundColor:"plum",padding:'15px',color:"white",textAlign:"center"}}>Our Services</h1>
            <div className='services-container'>
            {
                    services.map(service => <SingleService
                        key={service.id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Servicess;