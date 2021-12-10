import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap'
import ItemCount from '../../../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {Context} from '../../../../Context/CartContext'

const ItemDetail=({id, nombre, desc, tipo, precio, imagen, stock, categoria})=>{
    
    const [buy, setBuy] = useState(false)
    const {onAdd} = useContext(Context)

    const agregar = (props)=>{
        setBuy(true)
        onAdd({id, nombre, desc, tipo, precio, imagen, stock, categoria}, props.unidades)
        alert(`agregaste ${props.unidades} al carrito`)
    }

    return(
        <>
            <Container className="border border-danger">
                <Card className="bg-dark text-light">
                    <Row>
                        <Col>
                            <Card.Img variant="center" src={imagen} />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>{nombre}</Card.Title>
                                <Card.Text>{desc}</Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Text className="mb-3 text-info">{tipo}</Card.Text>
                                <Card.Text className="mb-3 text-success">${precio}</Card.Text>
                            </Card.Body>
                            <Card.Body>
                                {!buy ? <ItemCount stock={stock} onAdd={agregar}/> :
                                    <div className="d-flex flex-row">
                                        <Link to='/cart'><button type="button" className="btn btn-success">Terminar Compra</button></Link>
                                        <Link to='/'><button type="button" className="btn btn-outline-light">Volver a inicio</button></Link>
                                    </div>}
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}


export default ItemDetail;
