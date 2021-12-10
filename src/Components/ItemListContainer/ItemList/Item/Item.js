import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, desc, precio, imagen, stock}) =>{
    return(
        <>
            <Card style={{ width: '18rem' }} border="info" className="col-m-3 m-1" bg="dark" variant="dark">
                <Link to={`/item/${id}`}>
                <Card.Img  className="mt-2 mx-auto renderCard" variant="top" src={imagen} alt={nombre}/>
                <Card.Body className="text-secondary">
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                    <Card.Subtitle className="mb-3 text-success">${precio}</Card.Subtitle>
                    <Card.Text className="text-info">{stock} Disponibles</Card.Text>
                </Card.Body>
                </Link>
            </Card>
        </>
    )
}

export default Item;