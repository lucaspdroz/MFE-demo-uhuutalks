import React from 'react'
import img from '../../assets/sad.png'
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  background: #ef5350;
  border-radius: 10px;
  padding: 20px 0;
  text-align: center;
  color: #fff;

  & img{
    width: 50px;
    margin: auto;
    filter: invert(100%) brightness(12)
  }
`;

export default function ShowFallbackMessageError() {
  return (
    <ErrorContainer>
      <h3>Ooopsie. Perdemos nosso mapa!</h3>
      <img src={img} alt="deu ruim" />
    </ErrorContainer>
  )
}
