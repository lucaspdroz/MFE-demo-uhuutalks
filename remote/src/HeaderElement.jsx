import React from 'react';
import './index.css'

const HeaderElement = ({ title = "MFE" }) => {
    return (
        <div className='header'>
            {title}
        </div>
    );
}

export default HeaderElement
