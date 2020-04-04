import React from 'react';

import { Navbar, Nav, NavItem, NavLink, NavbarBrand, Collapse, UncontrolledDropdown, DropdownToggle } from 'reactstrap';

const NavbarBottom = () => {
  return (
    <Navbar className="header__navbar-bottom">
      <NavbarBrand className="header__navbar-bottom--brand" href="/">
        <img src="/bravo-9.svg" alt="bravo-logo" />
      </NavbarBrand>
      <Nav>
        <Collapse className="header__navbar-bottom--menu" isOpen={true} >
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>Commission</DropdownToggle>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>System</DropdownToggle>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>Training</DropdownToggle>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="#">Announcements</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><i className="fa fa-lg fa-bars"></i></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><i className="fa fa-lg fa-search"></i></NavLink>
          </NavItem>
        </Collapse>
      </Nav>
    </Navbar>
  );
}

export default NavbarBottom;