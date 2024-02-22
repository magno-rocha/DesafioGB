import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return(
    <div className="sidebar">
      <h2>DASHBOARD</h2>
      <div className="section">
        <div>Clientes</div>
        <div>Endereços</div>
      </div>
      <div className="section">
        <div>Produtos</div>
        <div>Categoria</div>
        <div>Pedidos</div>
        <div>Produtos Pedidos</div>
      </div>
    </div>
  )
}
export default Sidebar;
