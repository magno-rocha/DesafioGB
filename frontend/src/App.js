import React , { useEffect, useState} from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Products from './components/Products/Products';
import './index.css';
import axios from 'axios';


const App = () => {

  const [products, setProducts] = useState([]);
  const [apiProducts] = useState(
    'http://localhost:3333/api/produtos'
  );
  useEffect(() => {
    axios.get(apiProducts, {headers: {
      'Access-Control-Allow-Origin': '*',
    }, proxy: {
      host: 'http://localhost',
      port: 3000
    }}) .then((response) => {
      
      setProducts(response.data);
    });
    /* axios.get(apiProducts).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } 
    });*/
  }, [apiProducts]);

  let ordered = products.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  
  return (
    <div className= "">
      <Products data={ordered} />
      <Sidebar /> 
      <Header />
    </div>
  );
}

export default App;
