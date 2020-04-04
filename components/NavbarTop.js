import React from 'react';

import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

const NavbarTop = () => {
  return (
    <Navbar className="header__navbar-top">
      <Nav className="header__navbar-top--white">
        <NavItem>
          <NavLink href="#">Trustees</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">FAQ</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"><i className="fa fa-md fa-headphones"></i> 000000000</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">عربي</NavLink>
        </NavItem>
      </Nav>
      <Nav className="header__navbar-top--blue">
        <NavItem>
          <NavLink href="#">Knowledge Center</NavLink>
        </NavItem>
      </Nav>
      <Nav className="header__navbar-top--green">
        <NavItem>
          <NavLink href="#">E-Services</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavbarTop;