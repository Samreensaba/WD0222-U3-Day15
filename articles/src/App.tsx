import React from 'react';
import './App.css';
import Articles from './components/Articles';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './components/Details';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Articles/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
      
    
  );
}

export default App;
