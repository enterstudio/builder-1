import React from 'react';

import {
    NavLink
} from 'react-router-dom';

import {
    NavItem,
    Nav
} from 'reactstrap';

class Sidebar extends React.Component
{
    render()
    {
        return(
            <Nav vertical>
                <NavLink className="nav-link" exact to="/" activeClassName="active">Beranda</NavLink>
            </Nav>
        );
    }
}

export default Sidebar;