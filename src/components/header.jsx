import React from 'react';
import PropTypes from "prop-types"
import {  Navbar, Nav } from 'react-bootstrap';

import logo from '../images/logo.png'
import { Link } from 'gatsby';
import { Container, NavDropdown } from 'react-bootstrap';
import {FaHome, FaMapMarkerAlt,} from 'react-icons/fa'
import {FcAbout} from 'react-icons/fc'

import '../styles/index.scss'

const Header = () => {

  return (
    <Container>
      <Navbar expand="md" variant="dark">
        <Navbar.Brand href="/">
          <img style={{ maxWidth: `64px` }} src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li">
              <Link to="/" className="nav-link" activeClassName="active">
                <FaHome size={24} />
                Home
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/sobre" className="nav-link" activeClassName="active">
                <FcAbout size={24} />
                Sobre
              </Link>
            </Nav.Item>
            <NavDropdown title="Faça um pedido" style={{ textAlign: `center` }}>
              Escolha seu concelho:
              <Nav.Item className="nav-link">
                <Link
                  to="/castelobranco"
                  className="nav-link"
                  activeClassName="active"
                >
                  <FaMapMarkerAlt size={24} />
                  Castelo Branco
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-link">
                <Link
                  to="/covilha"
                  className="nav-link"
                  activeClassName="active"
                >
                  <FaMapMarkerAlt size={24} />
                  Covilha
                </Link>
              </Nav.Item>
            </NavDropdown>
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
