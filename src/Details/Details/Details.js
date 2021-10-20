
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import './Details.css';

const Details = () => {
    const { serviceid } = useParams();
    const [details,setDetails] = useState([])
    useEffect( () => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    } ,[])
    const matchingService = details.find(detail=> detail.id = parseInt(serviceid))
    const {images, specialist,description} = matchingService || {}
    return (
        <div className="detail-container">
            <div className="image">
            <img src={images} alt="" />
            </div>
            <div className="descriptions">
                <h2>
                    {specialist}
                </h2>
                <p>{description}</p>
            </div>
           
        </div>
    );
};

export default Details;