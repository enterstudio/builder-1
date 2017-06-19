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
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink exact to="/about" activeClassName="active">About</NavLink>
                <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
            </Nav>
        );
    }
}

export default Sidebar;