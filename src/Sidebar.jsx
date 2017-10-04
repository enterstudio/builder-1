import React from 'react';

import {
    NavLink
} from 'react-router-dom';

import {
    NavItem,
    Nav,
    Card,
    CardBlock
} from 'reactstrap';

class Sidebar extends React.Component
{
    render()
    {
        return(
            <Card>
                <CardBlock>
                    <Nav className="nav-stacked" vertical>
                        <NavLink className="nav-link" exact to="/" activeClassName="bg-success text-white">Beranda</NavLink>
                        <NavLink className="nav-link" exact to="/instalasi" activeClassName="bg-success text-white">Instalasi</NavLink>
                        <NavLink className="nav-link" exact to="/koding" activeClassName="bg-success text-white">Koding</NavLink>
                    </Nav> 
                </CardBlock>
            </Card>
        );
    }
}

export default Sidebar;