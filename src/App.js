import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer}  from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Cart} from './components/Cart/Cart.jsx'
import {CartProvider} from './context/CartContext'
import {Carrousel} from './components/Carrousel/Carrousel.jsx'
import { Footer } from './components/Footer/Footer';








function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <div className="App">
          <header>
            <NavBar/>
            <Carrousel></Carrousel>
          </header>
          <div className='custom-body'>
            <Routes>
            <Route path="/" element={<ItemListContainer greeting="GAME OVER"></ItemListContainer>}/>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting="GAME OVER"></ItemListContainer>}></Route>
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            </Routes>
          </div>  
          <Footer></Footer>  
      </div>
    </CartProvider>    
    </BrowserRouter>
    </>
  );
}

export default App;
