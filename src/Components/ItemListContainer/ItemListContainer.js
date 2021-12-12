import React, { useState, useEffect } from "react";
import {collection, query, getDocs, where} from "firebase/firestore";
import {getFirestoreDb} from "../../data/firebaseConfig";
import ItemList from "./ItemList/ItemList";
import {useParams} from "react-router-dom";

const ItemListContainer = (props) => {
    const db = getFirestoreDb();
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const {categoryId, typeId} = useParams();

    useEffect(() => {
        const getProductById = async () => {
            let queryCollection = collection(db, "data");
            if (typeId) {
                queryCollection = query(collection(db, "data"), where("type", "==", typeId));
            }
            if (categoryId) {
                queryCollection = query(collection(db, "data"), where("category", "==", categoryId));
            }
        const querySnapshot = await getDocs(queryCollection);
        const aux = querySnapshot.docs.map((doc) => {
            return { ...doc.data() };
            });
            setProductos(aux);
            setCargando(false);
        };
        getProductById();
        }, [categoryId, typeId]);

        return (
            <div className="container justify-center d-flex mx-auto row bg-dark text-light">
                {cargando ? <h2>Cargando Productos...</h2> : <ItemList productos={productos} />}
            </div>
        );
    };

export default ItemListContainer;