import React from 'react';
import ItemCount from '../../../ItemCount/ItemCount'
import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {Context} from '../../../../Context/CartContext'
import Swal from 'sweetalert2/src/sweetalert2.js'
import {Button} from 'react-bootstrap'


const ItemDetail=({id, nombre, desc, tipo, precio, imagen, stock, categoria})=>{
    
    const [buy, setBuy] = useState(false)
    const {onAdd} = useContext(Context)

    const agregar = (props)=>{
        setBuy(true)
        onAdd({id, nombre, desc, tipo, precio, imagen, stock, categoria}, props.unidades)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu selección se agregó al carrito',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return(
        <>
        <div className='container row border border-danger bg-dark'>
            <div className='col-md-6 my-5'>
                <img className='img-fluid rounded d-block mx-auto border border-warning' src={imagen} alt={nombre}/>
            </div>
            <div className='col-md-6 mt-5'>
                <h5 className='mt-3'>{nombre}</h5>
                <h6 className='mb-3'>{desc}</h6>
                <p className='mb-5 mt-5 text-success'>${precio}</p>
                <div>
                    {!buy ? <ItemCount stock={stock} onAdd={agregar}/> :
                        <div className='d-flex flex-row mx-auto mt-5 mb-3'>
                            <Button as={Link} to='/cart' className='mx-2 mt-5 btn btn-success'>Terminar Compra</Button>
                            <Button as={Link} to='/' className='mx-2 mt-5 btn bg-dark btn-outline-light'>Volver a inicio</Button>
                        </div>}
                </div>

            </div>
        </div>
        </>
    )
}


export default ItemDetail;
