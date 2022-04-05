import React from 'react';
import { Header } from "./components/header" 
import './index.css'
import 'boxicons';
import  {Home}  from "./components/home/index"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Booklist } from './components/Products';
import {DataProvider} from "./context/DataProvider"
import {Cart} from './components/cart/index'

function App() {
  
  return (
      <DataProvider>
    <div className="App">
       <Header /> 
       <Cart />
       <BrowserRouter>
       <Routes>
       
       <Route path="/" element={<Home/>} />
       <Route path="/Products" element ={<Booklist/>} />
       
       </Routes>
       </BrowserRouter>
    </div>
    </DataProvider>
    
  );
}

export default App;
