import React from "react";
import Card from "react-bootstrap/Card";
import "../Servicios/servicios.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ListGroup from "react-bootstrap/ListGroup";

const Servicios = () => {
  return (
    <Container fluid className="seccion-servicio text-center">
      <Row className="mx-lg-n5 p-5 ">
        <p className="titulo-seccion-servicio">Nuestros Servicios</p>

        <Col sm={12} md={6} lg={3} className="py-1 px-lg-2">
          <Card className="card-servicio" style={{height:"95%"}}>
            {/* <Card.Img className="foto-menu" variant="top" src={SUSHI1} /> */}
            <ListGroup variant="flush">
              <i className="fa-solid fa-sign-hanging fs-3 mt-3"></i>
              <Card.Title className="titulo-card">
                Administración de Arriendos
              </Card.Title>
              <ListGroup.Item className="text-card">
              Diseñamos contratos de arriendo de acuerdo a tus requerimientos
              </ListGroup.Item>
              <ListGroup.Item className="text-card">
              Buscamos y seleccionamos arrendatarios
              </ListGroup.Item>
              <ListGroup.Item className="text-card">
              Vigilamos el cumplimiento de los contratos y la mantención de tu inmueble
              </ListGroup.Item>
              
              
            </ListGroup>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3} className="py-1 px-lg-2">
          <Card className="card-servicio" style={{height:"95%"}}>
            {/* <Card.Img className="foto-menu" variant="top" src={sushi2} /> */}
            <ListGroup variant="flush">
              <i className="fa-solid fa-house-circle-check fs-3 mt-3"></i>
              <Card.Title className="titulo-card">
                Corretajes
              </Card.Title>

              <ListGroup.Item  className="text-card">
              Compraventa de inmuebles 
                </ListGroup.Item>

                <ListGroup.Item  className="text-card">
                Promoción de propiedades en el mercado inmobiliario 
                </ListGroup.Item>

                <ListGroup.Item  className="text-card">
                Asesoría legal en todo el proceso de compraventa
                </ListGroup.Item>

                <ListGroup.Item  className="text-card">
                Protocolos estrictos de evaluación de
                arrendatarios. 
                </ListGroup.Item>

                <ListGroup.Item  className="text-card">
                Altos estándares de calidad. 
                </ListGroup.Item>

            
              </ListGroup>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3} className="py-1 px-lg-2">
          <Card className="card-servicio" style={{height:"95%"}}>
            {/* <Card.Img className="foto-menu" variant="top" src={sushi6} /> */}
            <ListGroup variant="flush">
              <i className="fa-solid fa-file-contract fs-3 mt-3"></i>
              <Card.Title className="titulo-card">
                Soporte Legal
              </Card.Title>
              <ListGroup.Item  className="text-card">
              Estudios de títulos
                
                </ListGroup.Item>
                <ListGroup.Item  className="text-card">
                Regularización de títulos
                </ListGroup.Item>
                <ListGroup.Item  className="text-card">
                Confección de escrituras de compraventa, promesas y otros contratos afines.
                </ListGroup.Item>
              
              </ListGroup>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3} className="py-1 px-lg-2">
          <Card className="card-servicio" style={{height:"95%"}}>
            {/* <Card.Img className="foto-menu" variant="top" src={sushi7} /> */}
            <ListGroup variant="flush">
              <i className="fa-solid fa-scale-balanced fs-3 mt-3"></i>
              <Card.Title className="titulo-card">
                Tasaciones
              </Card.Title>
              <ListGroup.Item  className="text-card">
              Tasaciones de inmuebles
                </ListGroup.Item>

                <ListGroup.Item  className="text-card">
                Análisis de rentabilidad
                </ListGroup.Item>

                <ListGroup.Item  className="text-card">
                Análisis de mercado
                </ListGroup.Item>

              
              </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Servicios;
