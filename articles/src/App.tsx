import React from 'react';
import './App.css';
import Articles from './components/Articles';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import Mynav from './components/Mynav'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Mynav/>
      <Routes>
        <Route path='/' element={<Articles/>}/>
        <Route path='/details/:articleId' element={<Details/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
      
    
  );
}

export default App;
