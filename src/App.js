import React from 'react';
import './style.css';
import '@sweetalert2/theme-dark/dark.css';
import Navbar from './Components/Navbar';
import ItemDetailContainer from './Components/ItemListContainer/ItemDetalContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {CartFunction} from './Context/CartContext'
import Cart from './Components/Cart/Cart'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <CartFunction>
                    <Navbar/>
                        <Switch>
                            <Route exact path='/'>
                                <ItemListContainer titulo='Arma tu Computadora'/>
                            </Route>
                            <Route exact path='/prod/:typeId'>
                                <ItemListContainer titulo='Arma tu Computadora'/>
                            </Route>
                            <Route exact path='/category/:categoryId'>
                                <ItemListContainer titulo='Arma tu Computadora'/>
                            </Route>
                            <Route exact path='/saludo'>
                                <div className='text-center text-info'>
                                    <h1>Bienvenidos</h1>
                                </div>
                            </Route>
                            <Route exact path='/item/:id'>
                                <ItemDetailContainer/>
                            </Route>
                            <Route exact path='/cart'>
                                <Cart/>
                            </Route>
                            <Route exact path='*'>
                                <div className='text-center text-danger'>
                                    <h1>404</h1>
                                    <h2>No reconozco lo que búscas</h2>
                                </div>
                            </Route>
                        </Switch>
                </CartFunction>
            </BrowserRouter>
        
        </>
    );
}