import React from "react";
import logo from "../img/logo.png";
import "../Header/header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";



const Header = () => {
  return (
    <Container fluid className="  p-0">
      <Row className="logosection align-items-center">
        
        <Col className="text-center">
          <img className="logo" src={logo} />
          <p className="bajada-header">
            {" "}
            Gestionamos tu propiedad en Providencia
          </p>
          <center>
          <div className="container-boton">
          
          <a href = "/contacto"><Button
            className="button-enviar"
            size="sm">
            Contáctanos
          </Button>
          </a>
        </div>
          </center>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
