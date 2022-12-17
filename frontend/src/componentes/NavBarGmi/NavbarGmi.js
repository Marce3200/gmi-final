import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import iso from "../img/iso.png"
import React from "react";
import "../NavBarGmi/navbar.css"


const NavbarGmi = () => {
  return (
    <Navbar collapseOnSelect expand="lg"   className="navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img className="mini-logo" src={iso}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto links-nav">
           
          </Nav>
          <Nav>
            <Nav.Link href="/servicios">Servicios</Nav.Link>
            <Nav.Link href='/quienes-somos#quienesSomos' >Nosotros</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarGmi;
