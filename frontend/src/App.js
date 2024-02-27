import React , { useEffect, useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Products from './components/Products/Products';
import Categories from './components/Categories/Categories';
import Orders from './components/Orders/Orders';
import Clients from './components/Clients/Clients';
import Addresses from './components/Addresses/Addresses';
import OrderedProducts from './components/OrderedProducts/OrderedProducts';
import './index.css';
import axios from 'axios';


const App = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [clients, setClients] = useState([]);
  const [addresses, setAddresses] = useState([]);

  const [apiUrl] = useState(
    'http://localhost:3333'
  );

  let ordered = products.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  useEffect(() => {
    axios.get(apiUrl+'/produtos').then((response) => {
      setProducts(response.data);
    });
    axios.get(apiUrl+'/categorias').then((response) => {
      setCategories(response.data);
    });
    axios.get(apiUrl+'/pedidos').then((response) => {
      setOrders(response.data);
    });
    axios.get(apiUrl+'/produtos_pedidos').then((response) => {
      setOrderedProducts(response.data);
    });
    axios.get(apiUrl+'/clientes').then((response) => {
      setClients(response.data);
    });
    axios.get(apiUrl+'/enderecos').then((response) => {
      setAddresses(response.data);
    });
  }, [apiUrl]);
  

  const [key, setKey] = useState('produtos');
  
  return (
    <div>
      <h1 className="crud-title" >CRUD GB</h1>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-4 header-custom"
      > 
        <Tab eventKey="produtos" title="Lista de Produtos">
          <div className="container d-flex">
            <div className= "body-container">
              <Products data={ordered} />
            </div>  
          </div>
        </Tab>
        <Tab eventKey="categorias" title="Categorias">
          <div className="container d-flex">
            <div className= "body-container">
              <Categories data={ordered} />
            </div>  
          </div>
        </Tab>
        <Tab eventKey="pedidos" title="Pedidos">
          <div className="container d-flex">
            <div className= "body-container">
              <Orders data={ordered} />
            </div>  
          </div>
        </Tab>
        <Tab eventKey="produtosPedidos" title="Produtos Pedidos">
          <div className="container d-flex">
            <div className= "body-container">
              <OrderedProducts data={ordered} />
            </div>  
          </div>
        </Tab>
        <Tab eventKey="clientes" title="Clientes">
          <div className="container d-flex">
            <div className= "body-container">
              <Clients data={ordered} />
            </div>  
          </div>
        </Tab>
        <Tab eventKey="enderecos" title="Endereços">
          <div className="container d-flex">
            <div className= "body-container">
              <Addresses data={ordered} />
            </div>  
          </div>
        </Tab>
      </Tabs>
    </div> 
  );
}

export default App;
