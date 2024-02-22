import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Body from './components/Body/Body';
import './index.css';


function App() {
  return (
    <div className= "">
      <Body />
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
