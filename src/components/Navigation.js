import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div className="nav-header">
		<h1>AAPT-NEW ENGLAND SECTION</h1>
        <Navbar light expand="md">
        <NavbarBrand href="/aapt-nes">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/regional-meetings">Regional Meetings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/physics-olympics">Physics Olympics</NavLink>
            </NavItem> 
			<NavItem>
              <NavLink href="/janet-guersney-award">Janet Guersney Award</NavLink>
            </NavItem> 
			<NavItem>
              <NavLink href="/become-a-member">Become A Member</NavLink>
            </NavItem> 
			<NavItem>
              <NavLink href="/books-by-section-members">New Books By Section Members</NavLink>
            </NavItem>
			<NavItem>
              <NavLink href="/employment-opportunities">Employment Opportunities</NavLink>
            </NavItem>
			<NavItem>
              <NavLink href="/section-information">Section Information</NavLink>
            </NavItem>
			<NavItem>
              <NavLink href="/photo-gallery">Photo Gallery</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Navigation;
