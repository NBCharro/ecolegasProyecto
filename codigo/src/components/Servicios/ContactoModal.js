import classes from './ContactoModal.module.css';

const ContactoModal = (props) => {
    let mensaje;
    if (props.mensaje === 'Ok') {
        mensaje =
            'Gracias por ponerse en contacto. Revise su bandeja de email para leer nuestra NewsLetter.';
    }
    if (props.mensaje === 'Error') {
        mensaje =
            'Ha ocurrido un error que no ha permitido la conexion. Por favor, intentelo de nuevo.';
    }
    if (props.mensaje === 'Telefono') {
        mensaje = 'Por favor, introduzca un numero de telefono de 9 digitos.';
    }
    if (props.mensaje === 'Nombre') {
        mensaje =
            'Por favor, el campo de nombre debe tener al menos 3 caracteres.';
    }
    function confirmHandler() {
        props.onConfirm();
    }
    return (
        <div className={classes.modal}>
            <div className={classes.texto}>{mensaje}</div>
            <button className={classes.btn} onClick={confirmHandler}>
                Confirmar
            </button>
        </div>
    );
};

export default ContactoModal;
