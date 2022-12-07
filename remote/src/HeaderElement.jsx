import React from 'react';
import './index.css'

const HeaderElement = ({ title = "MFE" }) => {
    return (
        <>
            <h2>Aqui é React</h2>
            <div className='header'>
                <p>{title}</p>
            </div>
        </>
    );
}

export default HeaderElement
