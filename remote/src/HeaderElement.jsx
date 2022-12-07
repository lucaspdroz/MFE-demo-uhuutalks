import React from 'react';
import img from '../assets/React.png'
import './index.css'

const HeaderElement = ({ title = "MFE" }) => {
    return (
        <>
            <img src={img} alt="" />
            <h2>Aqui é React</h2>
            <div className='header'>
                <p>{title}</p>
            </div>
        </>
    );
}

export default HeaderElement
