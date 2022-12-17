
import React, { useState } from "react";
import "../Contacto/contacto.css"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


export default function Contacto() {
  const [correoEnviado, setCorreoEnviado] = useState (false);



  const [formValues, setFormValues] = useState({
     mail: "",
     mensaje: "",
     nombre: "",
     
     
   });
   async function handleSubmit(e) {
     e.preventDefault();
     const {mail,mensaje, nombre} = formValues;
     setCorreoEnviado(true);
     setFormValues({
      mail: "",
      mensaje: "",
      nombre: "",
      
    }
      
     )
     await axios.post('http://localhost:3001/api/form',{
      mail,
      mensaje,
      nombre,
     });

     



   }

  function handleFormChange(event) {
   
      const name = event.target.name;
      const value = event.target.value;
      setFormValues(values => ({...values, [name]: value}))
    



    // console.log(event)
    // const email= event.target.mail;
    // const nombre=event.target.nombre;
    // console.log(email);
    // const mensaje=event.target.mensaje;

    // setFormValues({
    //   nombre: nombre,
    //   mail: email,
    //   mensaje: mensaje,
    // });

  }
  return (
    <Container>
      <Row>
        <center> <Col>
        <p className="titulo-contacto">Contáctanos</p>
        <Form className="form-contacto">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label className="form-label">Nombre</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="nombre"
              value={formValues.nombre || ""}
              onChange={handleFormChange}
              placeholder=""
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
              type="email"
              name="mail"
              value={formValues.mail || ""}
              onChange={handleFormChange}
              size="sm"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="form-label">
              Escríbenos y te contestaremos a la brevedad
            </Form.Label>
            <Form.Control
              type="text"
              name="mensaje"
              value={formValues.mensaje || ""}
              onChange={handleFormChange}
              placeholder=""
              size="sm"
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </Form>
        <div className="container-boton">
          <Button
            className="button-enviar"
            size="sm"
            
            onClick={handleSubmit}
          >
            Enviar
          </Button>
          
        </div>
        {correoEnviado ? <p>Su correo fue enviado exitosamente</p>:null}
        </Col> </center>
        </Row>
      </Container>
  );
}