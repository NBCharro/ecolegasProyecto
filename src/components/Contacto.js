import React, { useState } from 'react';
import Formulario from './Formulario/Formulario';
import DatosContacto from '../components/Formulario/DatosContacto';
import ContactoModal from './Servicios/ContactoModal';
import Backdrop from './Servicios/Backdrop';
import classes from './Contacto.module.css';

function Contacto() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [mensaje, setMensaje] = useState('');
    function closeModalHandler() {
        setModalIsOpen(false);
    }
    function openModalHandler(mensaje) {
        setModalIsOpen(true);
        setMensaje(mensaje);
    }
    return (
        <>
            {modalIsOpen && (
                <ContactoModal
                    onConfirm={closeModalHandler}
                    mensaje={mensaje}
                />
            )}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
            <div className={classes.izquierda}>
                <Formulario openModal={openModalHandler} />
            </div>
            <div className={classes.derecha}>
                <DatosContacto />
            </div>
        </>
    );
}
export default Contacto;
