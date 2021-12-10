import React from 'react';
import { useState } from 'react'

const Context = React.createContext() 

const CartFunction = ({children}) =>{

    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)

    const onAdd = (producto, cantidad) =>{
        const itemExiste=cart.find(item=>item.id===producto.id)
        if(!itemExiste){
            setCart([...cart, {id:producto.id, nombre:producto.nombre, desc:producto.desc, precio:producto.precio, imagen:producto.imagen, tipo:producto.tipo, cantidad:cantidad, subtotal:(producto.precio*cantidad)}])
            setTotal(total+(producto.precio*cantidad))
            setUnidades(unidades + cantidad)
        }else{
            const cartAux=cart.map((item)=>{
                if(item.id===producto.id){
                    item.cantidad+=cantidad
                    item.subtotal+=producto.precio*cantidad
                }
                return item
            })
            setCart(cartAux)
            setTotal(total + producto.price*cantidad)
            setUnidades(unidades + cantidad)
        }
    }
    const onRemove = (id) => {
        const myItem = cart.find((item) => item.id === id);
        const cartAux = cart.filter((item) => item.id !== id);
        setCart(cartAux);
        setUnidades(unidades - myItem.cantidad);
        setTotal(total - myItem.subtotal);    
    };
    const onClear = (id) => {
        const myItem = cart.find((item) => item.id === id);
        const cartAux = cart.filter((item) => item.id !== id);
        setCart([])
        setTotal(0)
        setUnidades(0)
    }

    return <Context.Provider value={{cart, unidades, total, onAdd, onRemove, onClear}}>{children}</Context.Provider>

}

export {CartFunction, Context}