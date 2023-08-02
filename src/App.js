import React from 'react'
import './portafolio.css'
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaGithub, FaLinkedin } from 'react-icons/fa'



const App = () => {

  // const stickyColumn = document.querySelector(".sticky-column");
  // const normalColumn = document.querySelector(".normal-column");

  // window.addEventListener("scroll", function () {
  //   if (window.scrollY > stickyColumn.offsetTop) {
  //     stickyColumn.style.position = "fixed";
  //     stickyColumn.style.top = "0";
  //     normalColumn.style.marginLeft = `${stickyColumn.offsetWidth}px`;
  //   } else {
  //     stickyColumn.style.position = "static";
  //     normalColumn.style.marginLeft = "0";
  //   }
  // });

  return (
    <Container className='my-5'>
      <Row>
        <Col md={3} lg={3} style={{ color: 'white' }} className="sticky-column ">
          <h1>Luis Bustamante</h1>
          <h2>Software Developer</h2>
          <p>I build accessible products and digital experiences for the web. and additional to this I create music for your ear.</p>
          <nav>
            <ul>
              <li><a href='' rel="noopener noreferrer">About</a></li>
              <li><a href='' rel="noopener noreferrer"> Experience</a></li>
              <li><a href='' rel="noopener noreferrer">Projects</a></li>
              <li><a href='' rel="noopener noreferrer">Skills</a></li>
            </ul>
          </nav>

          <Nav id="social-media" className="my-5 d-flex justify-content-left">
            <Nav.Item>
              <Nav.Link target="_blank" href="https://github.com/lbdevv" rel="noopener noreferrer">
                <FaGithub />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link target="_blank" href="https://www.linkedin.com/in/luis-bustamante-catalan-8b2592179/" rel="noopener noreferrer">
                <FaLinkedin />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col md={8} style={{ color: 'white' }} className='normal-column'>
          <h2>Experiencias</h2>
          <p className='my-5'>
            Comencé en este mundo desde el año 2018 cuando decidí comenzar a estudiar programación.
            Realmente tenía curiosidad por entender como funcionaban las cosas en profundidad y valoro bastante los trabajos que tienen que ver
            con lo creativo y la generación de cosas que ayudan a los demás. 
          </p>

          <Card className='my-5'> 
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Ecomsur (2020-2023 Actual)</Card.Title>
              <Card.Text>
                  Trabajando en OMS (Order Management System) sistema de ordenes para proyectos de E-Commerce
                  especialmente enfocado en el Fullcommerce en otras palabras en el proceso completo desde que se genera la compra hasta
                  que el pedido llega al cliente

              </Card.Text>
              <Button variant="primary">Ver más detalles</Button>
            </Card.Body>
          </Card>

          <Card className='my-5'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Geogest (2019 - 2020)</Card.Title>
              <Card.Text>
                  Trabajando en le diseño y creación de un sistema de contabilidad y remuneraciones.
                  realicé trabajos como:
                  -Diseño y creación de bases de datos (3sera forma normal)
                  -Implementación de la lógica de negocio con ASP.NET MVC, Entity Framework, LinQ etc...
                  -FrontEnd con Razor, html, css, jquery
                  -Optimización de Querys para reportería contable SQL y Linq to SQL
                  -Creación de más de 14 reportes contables con filtros
                  -Exportaciones masivas
                  -Importaciones masivas
                  -Sistema de Usuarios y Roles
              </Card.Text>
              <Button variant="primary">Ver más detalles</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default App