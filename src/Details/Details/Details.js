import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';

const Details = () => {
    const { serviceid } = useParams();
    return (
        <div>
            <h2 style={{width:'50%',textAlign:"center",color:'plum'}}>{serviceid}</h2>
           
        </div>
    );
};

export default Details;