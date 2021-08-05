import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import OurServices from './pages/OurServices';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import './App.module.css';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/ourservices">
                    <OurServices />
                </Route>
                <Route path="/testimonials" exact>
                    <Testimonials />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
