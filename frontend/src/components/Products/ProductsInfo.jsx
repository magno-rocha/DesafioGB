import React, { Component } from 'react';
import axios from 'axios';

class ProductsInfo extends Component {
  constructor() {
    super();

    this.state = {
      id: ['Defining id...'],
      name: ['Defining names...'],
      description: ['Loading description...'],
      price: ['Loading prices...'],
      quantity: ['Loading quantity...'],
      createdAt: ['Loading date...'],
      category: ['Loading categories...'],
      image: ['Loading images...'], 
    };
  }
  
  render() {
    const { id } = this.props;
    const { name } = this.props;
    const { description } = this.props;
    const { price } = this.props;
    const { quantity } = this.props;
    const { createdAt } = this.props;
    const { category } = this.props;
    const { image } = this.props;

    function refreshPage() {
      window.location.reload(false);
    }

    const onDelete = (id) => {
      axios.delete(`http://localhost:3333/api/produtos/${id}`).then(refreshPage)
    }

    return (
      <div className="cards col-3">    
        <div className= "cards-content">
          <h3>{name}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">ID: {id}</li>
            <li className="list-group-item">Descrição: {description}</li>
            <li className="list-group-item">Preço: R${price}</li>
            <li className="list-group-item">Quantidade em Estoque: {quantity}</li>
            <li className="list-group-item">Data de Cadastro: {createdAt}</li>
            <li className="list-group-item">Categoria: {category}</li>
            <li className="list-group-item">Imagem: {image}</li>
          </ul>
        </div>
        <button className="card-btn" onClick={() => onDelete(id)}>Deletar</button>   
      </div>
    );
  }
}

export default ProductsInfo;
