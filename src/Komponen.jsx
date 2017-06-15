import React from 'react';
import {
    IndexRoute,
    Route
} from 'react-router';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

class Komponen extends React.Component
{
    render()
    {
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </Router>
        );
    }
}

export default Komponen;