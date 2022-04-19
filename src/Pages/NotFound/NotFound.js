import React from 'react';
import image404 from '../../Images/404_not_found.png';

const NotFound = () => {
    return (
        <div>
            <img src={image404} alt="404 img" className="w-100" />
        </div>
    );
};

export default NotFound;