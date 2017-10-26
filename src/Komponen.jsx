import React from 'react';
import {
    Route
} from 'react-router-dom';
import Beranda from './pages/Beranda.jsx';
import Tools from './pages/Tools.jsx';
import Koding from './pages/Koding.jsx';

class Komponen extends React.Component
{
    render()
    {
        return(
            <div>
                <Route exact path="/" component={Beranda}/>
                <Route exact path="/tools" component={Tools}/>
                <Route exact path="/koding" component={Koding}/>
            </div>
        );
    }
}

export default Komponen;