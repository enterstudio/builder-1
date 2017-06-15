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
                <NavItem>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </NavItem>
            </Nav>
        );
    }
}

export default Sidebar;