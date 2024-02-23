import {React, useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Body from './components/Body/Body';
import './index.css';
import axios from 'axios';


function App() {
  const [apiUrl] = useState(
    'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'
  );

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setDragons(response.data);
    });
  }, [apiUrl]);
  return (
    <div className= "">
      <Body />
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
