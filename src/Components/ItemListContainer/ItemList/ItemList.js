import React from 'react';
import Item from './Item/Item'

const ItemList=({productos})=>{
    return(
        <>
        {productos.map((producto)=>
            <Item 
            id={producto.id}
            key={producto.id}
            nombre={producto.name}
            desc={producto.description}
            precio={producto.price}
            imagen={producto.img}
            stock={producto.stock}
            /> 
        )}
        </>
    )
}

export default ItemList;