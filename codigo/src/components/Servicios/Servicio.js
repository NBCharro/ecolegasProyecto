import classes from './Servicio.module.css';

const Servicio = (props) => {
    function confirmHandler() {
        props.onConfirm();
    }
    return (
        <div className={classes.modal}>
            <div className={classes.texto}>
                {props.datos.split('\n').map((texto) => (
                    <p key={Math.random()}>{texto}</p>
                ))}
            </div>
            <button className={classes.btn} onClick={confirmHandler}>
                Confirmar
            </button>
        </div>
    );
};

export default Servicio;
