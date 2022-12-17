import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "../QuienesSomos/quienessomos.css";
import Card from "react-bootstrap/Card";
import propiedad from "../img/propiedad.jpg"

const QuienesSomos = () => {
  return (
    <Container fluid className="seccion-quienes p-0">
      <center>
        <Row className="row-quienes">
          <Col>
          <img  className="img-fluid" src={propiedad}></img>
       </Col>
       </Row>
        <Row className="w-75">
          <Col id='quienesSomos'>
    
            <p className="titulo-seccion-quienes"  >Quiénes Somos</p>

            <p className="texto-descripcion">
              MGI Gestión Inmobiliaria nace a partir de la unión de competencias
              entre profesionales provenientes del área legal con profesionales
              provenientes de la administración de empresas. La experiencia
              acumulada nos llevó a dar un paso adelante de la asesoría técnica,
              para convertirnos en Gestores Inmobiliarios. Poniendo a
              disposición de nuestros clientes todas nuestras competencias.
              Nuestra experiencia nos permite comprender que el éxito de la
              Gestión Inmobiliaria se basa no sólo en una acabada asesoría
              técnica, sino también en entender las necesidades particulares de
              cada uno de nuestros clientes. Por eso consideramos que la
              comunicación es un pilar fundamental en las relaciones que
              generamos.
            </p>
          </Col>
        </Row>
      </center>
      <center>
        <Row className="valores">
          <Col sm={12} md={4}>
            <Card className="card-mision mt-3" style={{height:"90%"}}>
              {/* <Card.Img className="foto-menu" variant="top" src={SUSHI1} /> */}
              <Card.Body>
              <i className="fa-regular fa-heart"></i>
                <Card.Title className="titulo-valores text-center">
                  Misión
                </Card.Title>
                <Card.Text className="text-valores text-center">
                  Generar valor de forma eficaz y responsable para quienes nos
                  confíen sus inmuebles.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className="card-mision mt-3" style={{height:"90%"}}>
              {/* <Card.Img className="foto-menu" variant="top" src={sushi2} /> */}
              <Card.Body>
              <i className="fa-regular fa-eye"></i>
                <Card.Title className="titulo-valores text-center">
                  Visión
                </Card.Title>
                <Card.Text className="text-valores text-center">
                  Entregar un servicio de alta calidad técnica, eficiente y
                  transparente.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className="card-mision mt-3" style={{height:"90%"}}>
              {/* <Card.Img className="foto-menu" variant="top" src={sushi6} /> */}
              <Card.Body>
              <i className="fa-regular fa-handshake"></i>
                <Card.Title className="titulo-valores text-center">
                  Valores
                </Card.Title>
                <Card.Text className="text-valores text-center">
                  Compromiso, responsabilidad y gratitud a nuestros clientes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </center>
    </Container>
  );
};

export default QuienesSomos;
