import React from 'react';
import img from '../assets/React.png'
import useSWR from 'swr'
import './index.css'


const HeaderElement = ({ title = "MFE" }) => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('https://swapi.dev/api/planets/1/', fetcher)

    if (error) return <div>falhou ao carregar</div>
    if (isLoading) return <div>carregando...</div>

    return (
        <>
            <img src={img} alt="" />
            <h2>Aqui é React</h2>
            <div className='header'>
                <p>{title}</p>
            </div>
            <div>olá {data?.name}!</div>
        </>
    );
}

export default HeaderElement
