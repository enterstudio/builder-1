import React from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class Navigasi extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.toggleNavbar = this.toggleNavbar.bind(this);
        
        this.state = {
            collapsedNavbar: false
        }
    }
    toggleNavbar()
    {
        this.setState({
            collapsedNavbar: !this.state.collapsedNavbar
        });
    }
    render()
    {
        return(
            <Navbar className="sticky-top navbar-dark bg-dark" expand="md">
                <NavbarBrand href="/">Webtutorial</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar}/>
                <Collapse isOpen={this.state.collapsedNavbar} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/html">HTML</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/html">CSS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/html">JS</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Navigasi;