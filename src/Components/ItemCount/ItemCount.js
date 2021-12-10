import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { MdShoppingCart } from 'react-icons/md';

const ItemCount = (props) => {

    const [stock, setStock] = useState(props.stock)
    const [unidades, setUnidades] = useState(0)

    const handleStock={
        sumaStock:()=>{
            if(stock===0){
                alert('no hay mas stock')
            } else {
                setUnidades(unidades+1)
                setStock(stock-1)
            }
        },
        restaStock:()=>{
            if(unidades===0){
                alert('no podes seleccionar menos de 0')
            } else {
                setUnidades(unidades-1)
                setStock(stock+1)
            }
        }
    }

    return(
        <>
        <div>
            <div className="d-flex flex-row text-center w-25 mb-3">
            <button onClick={handleStock.restaStock} className="btn btn-outline-danger ICButton">-</button>
            <p className="col">{unidades}</p>
            <button onClick={handleStock.sumaStock} className="btn btn-outline-success ICButton">+</button>
            </div>
                <p className='text-warning'>Hay {stock} disponibles</p>
                <Button variant="outline-primary" onClick={()=>props.onAdd({unidades})}>Agregar al carrito<MdShoppingCart size={'20px'} /></Button>
        </div>
        
        </>
)

}

export default ItemCount