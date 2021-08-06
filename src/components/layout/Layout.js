import { useLocation } from 'react-router-dom';
import MainNavigation from './MainNavigation';

function Layout(props) {
    const navigation = useLocation();
    const homePage = navigation.pathname === '/';
    return (
        <>
            {!homePage && <MainNavigation />}
            <main>{props.children}</main>
        </>
    );
}

export default Layout;
