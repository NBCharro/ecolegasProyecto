import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Inicio.module.css';
import logo from '../resources/logo.png';

function Inicio() {
    const history = useHistory();
    function saberMas() {
        history.push('/ourservices');
    }

    return (
        <div className={classes.principal}>
            <img src={logo} alt="Ecolegas" />
            <h1>AGRICULTURA ECOLÓGICA</h1>
            <button onClick={saberMas} className={classes.bump}>
                Saber más
            </button>
        </div>
    );
}

export default Inicio;
