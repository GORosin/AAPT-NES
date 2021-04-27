import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div className="nav-header">
		<h1>AAPT-NEW ENGLAND SECTION</h1>
        <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
		   <NavLink to="/" exact>Home</NavLink>
           <NavLink to="/regional-meetings">Regional Meetings</NavLink>
		   <NavLink to="/physics-olympics">Physics Olympics</NavLink>
		   <NavLink to="/janet-guersney-award">Janet Guersney Award</NavLink>
		   <NavLink to="/become-a-member">Become A Member</NavLink>
		   <NavLink to="/books-by-section-members">New Books By Section Members</NavLink>
		   <NavLink to="/employment-opportunities">Employment Opportunities</NavLink>
		   <NavLink to="/section-information">Section Information</NavLink>
		   <NavLink to="/photo-gallery">Photo Gallery</NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Navigation;
