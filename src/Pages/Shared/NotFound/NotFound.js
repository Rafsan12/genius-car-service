import React from 'react';
import sleeping from '../../../images/4o4.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Now Mechanic is not Available Now</h2>
           <img className='w-100' src={sleeping} alt="" /> 
        </div>
    );
};

export default NotFound;