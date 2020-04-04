import React from 'react';

import NavbarTop from './NavbarTop';
import NavbarBottom from './NavbarBottom';

const Header = () => {
  return (
    <header className="header container p-0">
        <NavbarTop />
        <NavbarBottom />  
    </header>
  );
}

export default Header;