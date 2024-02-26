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
    axios.get(apiProducts).then((response) => {
      setProducts(response.data);
    });
  }, [apiProducts]);
  console.log(ordered);
  
  return (
    <div className= "container">
      <Sidebar /> 
      <Header />
      <div className= "body-container">
        <Products data={ordered} />
      </div>  
    </div>
  );
}

export default App;
