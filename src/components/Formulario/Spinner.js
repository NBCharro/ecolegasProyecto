import React from 'react';
import spinnerLogo from '../../resources/nbcharro.png';
import classes from './Spinner.module.css';

const Spinner = (props) => {
    return (
        <div className={classes.submitBtn}>
            <img src={spinnerLogo} alt="Spinner" />
        </div>
    );
};

export default Spinner;
