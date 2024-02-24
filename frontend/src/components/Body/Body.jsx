import React , { Component } from 'react';
/* import Clients from '../Clients/Clients'
 */import Products from '../Products/Products';
import './Body.css';

class Body extends Component {
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
    const { data } = this.props;
    return (
      <div>
        {!details ? (
          <div className="login-card">
            <h3>LOGIN</h3>
            <select>
              <option defaultValue="select">Select an user</option>
              <option value="daenerys">Daenerys</option>
              <option value="john">John Snow</option>
              <option value="nightking">The Night King</option>
            </select>
            <button type="button" className="btn btn-outline-secondary card-btn"             onClick={() => this.setState({ details: !details })}
            >
                LOG IN
            </button>
          </div>
        ) : null}
        {details ? (
          <div>
            <Products className="container" data={data} />
          </div>
        ) : null}
      </div>  
    );
  }
}  

export default Body;
