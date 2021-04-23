import React, { useState } from 'react';
import PropTypes from "prop-types"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  NavLink
} from 'reactstrap';

import logo from '../images/Logo-site.png'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ backgroundColor: "#ffbb00" }}>
      <div className="container">
        <Navbar light expand="md">
          <NavbarBrand href="/">
            <img src={logo} style={{ width: 64 }} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse
            isOpen={isOpen}
            style={{ justifyContent: `flex-end` }}
            navbar
          >
            <Nav navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Pagina Inicial
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/castelobranco">
                    Castelo Branco
                  </DropdownItem>
                  <DropdownItem href="/covilha">Covilhã</DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/sobre">Sobre</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  )
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
