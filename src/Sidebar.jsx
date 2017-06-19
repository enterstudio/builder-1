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
            </Nav>
        );
    }
}

export default Sidebar;