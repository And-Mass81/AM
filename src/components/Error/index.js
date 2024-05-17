import React from 'react';
import './index.scss';




const Error = () => {
    return (
        <div>
             <div className='errorWrap'>
            <div className='textError'>
            <h3>404 Not Found</h3>
            <p>The page you are looking for not avaible!</p>
            {/* < Link to="/" className='linkError'>Go to Home</Link> */}
            <div className='errorAni'>  
            </div>
            </div>
        </div>
            
        </div>
    );
};

export default Error;