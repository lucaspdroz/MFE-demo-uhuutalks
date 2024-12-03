import React from 'react';
import img from '../assets/React.png'
import useSWR from 'swr'
import './index.css'

const HeaderElement = ({ title = "MFE" }) => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('https://swapi.dev/api/planets/1/', fetcher)

    return (
        <>
            <div className='headerElement'>
                <h2>Aqui é React</h2>
                <img src={img} alt="" />
                <p>{title}</p>
                <div>
                    {
                        error && <div>deu ruim</div> ||
                        isLoading && <div>Carregando...</div> ||
                        data && <span>Olá {data?.name}!</span>
                    }
                </div>
            </div>
        </>
    );
}

export default HeaderElement
