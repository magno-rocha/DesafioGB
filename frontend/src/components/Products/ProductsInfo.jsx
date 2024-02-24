import React, { Component } from 'react';

class ProductsInfo extends Component {
  constructor() {
    super();

    this.state = {
      name: ['Defining date...'],
      description: ['Loading names...'],
      price: ['Loading types...'],
      createdAt: ['Loading date...'],
      category: ['Loading histories...'],
      image: ['Loading histories...'], 
    };
  }

  state = { details: true };
  
  render() {
    const { details } = this.state;
    const { name } = this.props;
    const { description } = this.props;
    const { price } = this.props;
    const { createdAt } = this.props;
    const { category } = this.props;
    const { image } = this.props;

    return (
      <div className="card">
        <div>    
          {!details ? (
            <div>
              <h3>{name}</h3>
              <button
                type="button"
                className="btn btn-outline-secondary card-btn"
                onClick={() => this.setState({ details: !details })}
              >
                More Details
              </button>
                
              <button className="card-btn" onClick={() => this.setState({ details: !details })}>Delete</button>
                
            </div>
          ) : null}
        </div>
        <div>  
          {details ? (
            <div>
              <h5>Descrição: {description} </h5>
              <h5>Preço: R${price} </h5>
              <h5>Data de Cadastro: {createdAt}</h5>
              <h5>Categoria: {category} </h5>
              <h5>Imagem: {image} </h5>
              <button
                type="button"
                className="btn btn-outline-secondary card-btn"
                onClick={() => this.setState({ details: !details })}
              >
                Hide Details
              </button>
              <button className="card-btn">Edit Details</button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ProductsInfo;
