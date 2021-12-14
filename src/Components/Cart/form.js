import React, { useContext } from 'react';
import { useState } from 'react'
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Context } from '../../Context/CartContext'
import { getFirestoreDb } from '../../data/firebaseConfig';
import Swal from 'sweetalert2/src/sweetalert2.js'

const formContact = () => {
    const {cart, onClear} = useContext(Context)
    const [uName, setUName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const db = getFirestoreDb();
        const onSubmit = async (e) => {
            try {
                e.preventDefault();
                const user = {
                    uName,
                    lastName,
                    phone,
                    email,
                    address,
                    message,
                };
                const docData = {
                    ...user,
                    dateExample: Timestamp.fromDate(new Date()),
                    cart,
                };
                const myId = await addDoc(collection(db, "orders"), docData);
                console.log(myId.id)
            } catch (error) {
                console.log(error)
            } finally {
                Swal.fire({
                    position: 'top-center',
                    background: '<i class="bg.dark"></i>',
                    icon: 'success',
                    title: 'Confirmado',
                    text: 'Tu compra esta en camino',
                    confirmButtonText: '<a href="/">Confirmado</a>',
                })
                cleanData();
                onClear();
            }
        }
        const cleanData = () => {
            setUName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setAddress('');
            setMessage('');
    }
return(
    <>
    <div className="container mx-auto mt-3 mb-5">
        <form className="bg-dark" >
            <div className="form-row row">
                <div className="form-group col-md-4">
                    <label for="inputName">Nombre</label>
                    <input type="text" className="form-control bg-dark text-light"  id="inputNombre" placeholder="Pon tu Nombre" value={uName} onChange={(e) =>{setUName(e.target.value)}}/>
                </div>
                <div className="form-group col-md-4">
                    <label for="inputLastname">Apellido</label>
                    <input type="text" className="form-control bg-dark text-light" id="inputLastName" placeholder="Apellido" value={lastName} onChange={(e) =>{setLastName(e.target.value)}}/>
                </div>
                <div className="form-group col-md-4">
                    <label for="inputPhone">Telefono</label>
                    <input type="text" className="form-control bg-dark text-light" id="inputPhone" placeholder="Telefono" value={phone} onChange={(e) =>{setPhone(e.target.value)}}/>
                </div>
            </div>
            <div className="form-row row">
                <div className="form-group col-md-4">
                    <label for="inputEmail">E-mail</label>
                    <input type="email" className="form-control bg-dark text-light"  id="inputEmail"  placeholder="E-mail"  value={email}  onChange={(e) =>{setEmail(e.target.value)}}/>
                </div>
                <div className="form-group col-md-4">
                    <label for="inputAddress">Dirección</label>
                    <input type="text" className="form-control bg-dark text-light" id="inputAddress" placeholder="Calle, Altura, Ciudad, Estado, departamento, codigo postal, etc" value={address} onChange={(e) =>{setAddress(e.target.value)}}/>
                </div>
                <div className="form-group col-md-4">
                    <label for="inputMessage">Mensaje</label>
                    <input type="text" className="form-control bg-dark text-light" id="inputMessage" placeholder="Mensaje (Opcional)" value={message} onChange={(e) =>{setMessage(e.target.value)}}/>
                </div>
            </div>
            <button href='/' type="submit" className="mt-3 mx-auto btn btn-outline-success mx-auto" onClick={onSubmit} disabled={!(uName !== "" && lastName !== "" && phone !== "" && email !== "" && address !== "")}>
                Finalizar la Compra
            </button>
        </form>
    </div>
    </>
)}
export default formContact;