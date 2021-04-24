import React, { useState } from 'react';
import PropTypes from "prop-types"
import {  Navbar, Nav } from 'react-bootstrap';

import logo from '../images/logo.png'
import { Link } from 'gatsby';
import { Container, NavDropdown } from 'react-bootstrap';

import '../styles/index.scss'

const Header = () => {

  return (
    <Container>
      <Navbar expand="md" variant="dark">
        <Navbar.Brand href="/">
          <img style={{ maxWidth: `64px` }} src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto">
            <NavDropdown title="Escola sua cidade">
              <Nav.Item className='nav-link'>
                <Link
                  to="/castelobranco"
                  className="nav-link"
                  activeClassName="active"
                >
                  Castelo Branco
                </Link>
              </Nav.Item>
              <Nav.Item className='nav-link'>
                <Link
                  to="/covilha"
                  className="nav-link"
                  activeClassName="active"
                >
                  Covilha
                </Link>
              </Nav.Item>
            </NavDropdown>
            <Nav.Item as="li">
              <Link to="/sobre" className="nav-link" activeClassName="active">
                Sobre
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
