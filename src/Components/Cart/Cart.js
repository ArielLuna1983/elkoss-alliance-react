import React, {useContext} from 'react';
import { Card, Button } from 'react-bootstrap'
import { Context } from '../../Context/CartContext'
import { MdDelete } from 'react-icons/md';
import Form from './form'
import {Link} from 'react-router-dom'

const Cart = () =>{
    const {cart, unidades, total, onRemove} = useContext(Context);
    return unidades > 0 ?(
        <>
        <div className="container justify-center d-flex mx-auto row bg-dark text-light">
        <div className="text-light text-center">
            <h5>Tu compre es de  <span className='text-info'>{unidades} unidades</span></h5>
            <h4>Por un total de <span className='text-success'>${total}</span></h4>
        </div>
        {cart.map((item)=>
            <Card style={{ width: '18rem' }} border="info" className="col-m-3 m-1" bg="dark" variant="dark">
                <Card.Img  className="mt-2 mx-auto renderCard" variant="top" src={item.imagen} alt={item.nombre}/>
                <Card.Body className="text-secondary">
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>{item.desc}</Card.Text>
                    <Card.Subtitle className="mb-3 text-success">${item.precio}</Card.Subtitle>
                    <Card.Text className="text-info">{item.cantidad} compradas</Card.Text>
                </Card.Body>
                <button type="button" class="btn btn-danger mb-4" onClick={() => onRemove(item.id)}>Eliminar compra <MdDelete/></button>
            </Card>
            )}
            </div>
            <Form/>
        </>
    ) : (
        <>
        <div className="text-center">
            <h1 className="text-light mt-5">No hay Items en tu carrito</h1>
            <Button as={Link} to='/' variant="outline-light" className='mt-3'>Ir a Comprar</Button>
        </div>
        </>
    )}

export default Cart
            