import React from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class Navigasi extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.toggleNavdropdown = this.toggleNavdropdown.bind(this);
        
        this.state = {
            collapsedNavbar: false
        }
        this.state = {
            dropdownOpen : false
        }
    }
    toggleNavbar()
    {
        this.setState({
            collapsedNavbar: !this.state.collapsedNavbar
        });
    }
    toggleNavdropdown()
    {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render()
    {
        return(
            <Navbar color="inverse" className="sticky-top" inverse toggleable>
                <NavbarToggler right onClick={this.toggleNavbar}/>
                    <NavbarBrand href="/">Webtutorial</NavbarBrand>
                    <Collapse className="navbar-toggleable-md" isOpen={this.state.collapsedNavbar} navbar>

                        <Nav className="mr-auto" navbar>
                            <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleNavdropdown}>
                                <DropdownToggle nav caret>
                                    Tutorial
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>HTML</DropdownItem>
                                    <DropdownItem>CSS</DropdownItem>
                                    <DropdownItem>JavaScript</DropdownItem>
                                </DropdownMenu>
                            </NavDropdown>
                        </Nav>
                    </Collapse>
            </Navbar>
        );
    }
}

export default Navigasi;