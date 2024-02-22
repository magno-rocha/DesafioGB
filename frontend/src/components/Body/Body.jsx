import React from 'react';
import Clients from '../Clients/Clients'
import './Body.css';

function Body() {
  return(
    <div className="body-container"> 
      <h1>Aguardando Dados</h1>
      <Clients />
    </div>
  )
}

export default Body;
