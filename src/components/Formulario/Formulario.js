import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import classes from './Formulario.module.css';
import Spinner from './Spinner';

const Formulario = (props) => {
    const nombreInputRef = useRef();
    const telefonoInputRef = useRef();
    const emailInputRef = useRef();
    const mensajeInputRef = useRef();
    const [loading, setLoading] = useState(false);
    function sendEmail(event) {
        event.preventDefault();
        // Comprobacion que los datos sean correctos
        if (nombreInputRef.current.value.replace(/ /g, '').length < 3) {
            props.openModal('Nombre');
            return;
        }
        if (telefonoInputRef.current.value.length < 9) {
            props.openModal('Telefono');
            return;
        }
        // Activar Spinner
        setLoading(true);

        // Enviamos el email de contacto mediante la API emailJS
        emailjs
            .sendForm(
                'service_8mm3ted',
                'template_yifu74q',
                event.target,
                'user_wTIFtMhPLnlKGMqxxoYFh'
            )
            .then(
                (result) => {
                    setLoading(false);
                    props.openModal('Ok');
                    // Limpiar los campos
                    nombreInputRef.current.value = '';
                    telefonoInputRef.current.value = '';
                    emailInputRef.current.value = '';
                    mensajeInputRef.current.value = '';
                },
                (error) => {
                    setLoading(false);
                    props.openModal('Error');
                    return;
                }
            );

        // Simulacion del envio de email
        // setTimeout(() => {
        //     setLoading(false);
        //     props.openModal('Ok');
        //     // props.openModal('Error');
        // }, 5000);
    }
    return (
        <form className={classes.contenedorForm} onSubmit={sendEmail}>
            <h1>Contacto</h1>
            <p className={classes.mensajeRecibir}>
                Reciba nuestra NewsLetter en su email
            </p>
            <div className={`${classes.row} ${classes.contenedorInput}`}>
                <div>
                    <div className={`${classes.wide} ${classes.estiloInput}`}>
                        <input
                            type="text"
                            name="from_name"
                            required="required"
                            ref={nombreInputRef}
                        />
                        <label>Nombre</label>
                    </div>
                </div>
                <div>
                    <div className={classes.estiloInput}>
                        <input
                            type="email"
                            name="user_email"
                            required="required"
                            ref={emailInputRef}
                        />
                        <label>Email</label>
                    </div>
                </div>
                <div>
                    <div className={classes.estiloInput}>
                        <input
                            type="number"
                            name="contact_number"
                            required="required"
                            ref={telefonoInputRef}
                        />
                        <label>Teléfono</label>
                    </div>
                </div>
                <div>
                    <div
                        className={`${classes.estiloInput} ${classes.wide} ${classes.mensajeTexto}`}
                    >
                        <textarea
                            name="message"
                            rows="5"
                            required="required"
                            ref={mensajeInputRef}
                        ></textarea>
                        <label>Mensaje</label>
                    </div>
                </div>
                {!loading && (
                    <button className={classes.submitBtn}>Enviar</button>
                )}
                {loading && <Spinner />}
            </div>
        </form>
    );
};
export default Formulario;
