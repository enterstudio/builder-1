import React from 'react';
import {
    Switch,
    Redirect
} from 'react-router';
import {
    Route
} from 'react-router-dom';
import Beranda from './pages/Beranda.jsx';
import Instalasi from './pages/Instalasi.jsx';

class Komponen extends React.Component
{
    render()
    {
        return(
            <div>
                <Route exact path="/" component={Beranda}/>
                <Route exact path="/instalasi" component={Instalasi}/>
            </div>
        );
    }
}

export default Komponen;