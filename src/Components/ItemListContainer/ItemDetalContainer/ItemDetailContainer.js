import React, {useState, useEffect} from 'react';
/* import { collection, where } from "firebase/firestore";*/
import { doc, getDoc } from "firebase/firestore";
import { getFirestoreDb } from '../../../data/firebaseConfig';
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

function ItemDetailContainer(){

    const db = getFirestoreDb();
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)
    const { id } =useParams();
    
    useEffect(() => {
        const getProductById = async () => {
        const queryCollection  = doc(db, 'data', id)
        const querySnapshot = await getDoc(queryCollection);
        const aux = { id: querySnapshot.id, ...querySnapshot.data() }
            setProducto(aux);
            setCargando(false);
          }
          getProductById();
      }, [id])


    return(
        <div className="container justify-center d-flex mx-auto row bg-dark text-light">
            {cargando ? <h2>Cargando Productos...</h2> :
            <ItemDetail  id={producto.id} nombre={producto.name} desc={producto.description} tipo={producto.type} precio={producto.price} imagen={producto.img} stock={producto.stock} categoria={producto.category}/>}
        </div>
    )

};

export default ItemDetailContainer;