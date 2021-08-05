import React from 'react';
import classes from './DatosContacto.module.css';

const DatosContacto = () => {
    return (
        <div className={classes.contenedorContacto}>
            <h1>Contacto</h1>
            <div>
                <h4>Dirección:</h4>
                <p>
                    Calle las Rozas, 1 <br />
                    Madrid, 28039 <br />
                    Madrid
                </p>
            </div>
            <div>
                <h4>Teléfono:</h4>
                <p>555-555-555</p>
            </div>
            <div>
                <h4>Email:</h4>
                <p>contacto@ecolegas.com</p>
            </div>
            <div>
                <h4>Website:</h4>
                <p>
                    <a href="www.ecolegas.com" target="_blank">
                        www.ecolegas.com
                    </a>
                </p>
            </div>
        </div>
    );
};

export default DatosContacto;
