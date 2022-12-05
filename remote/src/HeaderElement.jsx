import React from 'react';
import './index.css'

const HeaderElement = ({ title = "MFE" }) => {
    return (
        <div className='header'>
            <p>{title}</p>
        </div>
    );
}

export default HeaderElement
