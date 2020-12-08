import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const Menu = () => {
	const [dropdownOpen, setOpen] = useState(false);

	const toggle = () => setOpen(!dropdownOpen);

    return (
       <div>
	   <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret color = "primary">
        Menu
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem><NavLink to="/">Home</NavLink></DropdownItem>
        <DropdownItem><NavLink to="/about">About</NavLink></DropdownItem>
        <DropdownItem><NavLink to="/contact">Contact</NavLink></DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
       </div>
    );
}
 
export default Menu;
