import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../resources/logo.png';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    const [clicked, setClicked] = useState(false);
    const navigation = useLocation();
    function activeNav(pathName) {
        return navigation.pathname === pathName ? classes.navActivo : null;
    }
    function showHandler() {
        setClicked((prevState) => !prevState);
    }
    return (
        <nav>
            <div>
                <img className={classes.logo} src={logo} alt="Logo" />
            </div>
            <ul
                className={`${classes.navLinks} ${
                    clicked && classes.navLinksClicked
                }`}
            >
                <li>
                    <Link to="/" onClick={showHandler}>
                        Inicio
                    </Link>
                </li>
                <li className={activeNav('/ourservices')}>
                    <Link to="/ourservices" onClick={showHandler}>
                        Nuestros Servicios{' '}
                    </Link>
                </li>
                <li className={activeNav('/testimonials')}>
                    <Link to="/testimonials" onClick={showHandler}>
                        Opiniones
                    </Link>
                </li>
                <li className={activeNav('/contact')}>
                    <Link to="/contact" onClick={showHandler}>
                        Contacto
                    </Link>
                </li>
            </ul>
            <div
                className={`${classes.burger} ${clicked && classes.toggle}`}
                onClick={showHandler}
            >
                <div className={classes.lineaBurger1}></div>
                <div className={classes.lineaBurger2}></div>
                <div className={classes.lineaBurger3}></div>
            </div>
        </nav>
    );
}

export default MainNavigation;
