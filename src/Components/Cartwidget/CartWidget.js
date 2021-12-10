import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { MdShoppingCart } from 'react-icons/md';
import { Context } from '../../Context/CartContext'





const CartWidget = () => {

const { unidades } = useContext(Context);

  return (
    unidades > 0 && (
      <>
        <div id="main">
          <button className="btn btn-outline-light">
            {unidades} 
          <Link to="/cart">
          <MdShoppingCart size={'35px'} />
          </Link>
          </button>
        </div>

      </>
    )
  );
};

export default CartWidget;
