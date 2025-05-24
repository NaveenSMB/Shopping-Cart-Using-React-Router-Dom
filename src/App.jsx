import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header";
import { Home } from './components/Home';
import { Viewcart } from './components/Viewcart';
import { useState } from 'react';

function App() {
const [cart, setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home cart={cart} setCart={setCart}/>}/>
            <Route path="/Cart" element={<Viewcart cart={cart} setCart={setCart}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
