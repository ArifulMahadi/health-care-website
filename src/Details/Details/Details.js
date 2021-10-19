import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {serviceid } = useParams()
    return (
        <div>
            <h2>details {serviceid}</h2>
        </div>
    );
};

export default Details;