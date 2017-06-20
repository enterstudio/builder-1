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
                    <Nav vertical>
                        <NavLink className="nav-link" exact to="/" activeClassName="active">Beranda</NavLink>
                    </Nav> 
                </CardBlock>
            </Card>
        );
    }
}

export default Sidebar;