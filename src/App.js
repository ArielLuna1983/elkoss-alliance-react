import React from 'react';
import './style.css';
import Navbar from './Components/Navbar';
import ItemDetailContainer from './Components/ItemListContainer/ItemDetalContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import {CartFunction} from './Context/CartContext'
import Cart from './Components/Cart/Cart'
import '@sweetalert2/theme-dark/dark.css';


export default function App() {
  return (
    <>
      <BrowserRouter>
      <CartFunction>
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <ItemListContainer  titulo='Arma tu Computadora'/>
          </Route>
          <Route exact path="/prod/:typeId" >
            <ItemListContainer titulo='Arma tu Computadora'/>
          </Route>
          <Route exact path="/category/:categoryId" >
            <ItemListContainer titulo='Arma tu Computadora'/>
          </Route>
          <Route exact path="/saludo" >
            <div className="text-center">
              <h1>Bienvenidos</h1>
            </div>
          </Route>
          <Route exact path="/item/:id" >
            <ItemDetailContainer titulo='Tu Eleccion'/>
          </Route>
          <Route exact path="/cart" >
            <h1 className='text-light text-center'></h1>
              <Cart titulo='Tu Compra'/>
          </Route>
          <Route exact path="*" >
            <div className="text-center text-danger">
              <h1>404</h1>
              <h2>No sé que estás buscando</h2>
            </div>
          </Route>
        </Switch>
        </CartFunction> 
      </BrowserRouter>
    </>
  );
} 
