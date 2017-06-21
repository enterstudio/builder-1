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
                        <NavLink className="nav-link" exact to="/" activeClassName="active">Beranda</NavLink>
                        <NavLink className="nav-link" exact to="/instalasi" activeClassName="active">Instalasi</NavLink>
                    </Nav> 
                </CardBlock>
            </Card>
        );
    }
}

export default Sidebar;