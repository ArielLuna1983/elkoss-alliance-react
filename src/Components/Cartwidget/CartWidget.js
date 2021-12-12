import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import {MdShoppingCart} from 'react-icons/md';
import {Context} from '../../Context/CartContext'
import {Button} from 'react-bootstrap'

const CartWidget = () => {

    const {unidades} = useContext(Context)

    return (unidades > 0 && (
        <>
        <div>
            <Button as={Link} to='/cart' variant='outline-light'>{unidades} <MdShoppingCart size={'30px'}/></Button>
        </div>
        </>
    ))}
export default CartWidget;