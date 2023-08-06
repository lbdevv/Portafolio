import React from 'react'
import './portafolio.css'
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaGithub, FaLinkedin } from 'react-icons/fa'



const App = () => {

   //const stickyColumn = document.querySelector(".sticky-column");
   //const normalColumn = document.querySelector(".normal-column");

   //window.addEventListener("scroll", function () {
     //if (window.scrollY > stickyColumn.offsetTop) {
       //stickyColumn.style.position = "fixed";
       //stickyColumn.style.top = "0";
      //normalColumn.style.marginLeft = `${stickyColumn.offsetWidth}px`;
     //} else {
       //stickyColumn.style.position = "static";
       //normalColumn.style.marginLeft = "0";
     //}
   //});

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
          <h2>Sobre mi</h2>
          <p className='my-3'>
            Comencé en este mundo desde el año 2018 cuando decidí comenzar a estudiar programación.
            Realmente tenía curiosidad por entender como funcionaban las cosas en profundidad y valoro bastante los trabajos que tienen que ver
            con lo creativo y la generación de cosas que ayudan a los demás. Por lo tanto esta elección era ideal considerando que es una de las pocas herramientas
            que te permiten crear infinidad de cosas solo con 1 herramienta fisica.
          </p>

          <h2 className='my-5'>Experiencias</h2>
          <div className='project-item my-3'>
              <div className='poject-item-title'>
                <h2>Ecomsur (2020-2023 Actual)</h2>
              </div>
              <div className='project-item-content'>
              <p>
                Trabajando en OMS (Order Management System) sistema de ordenes para proyectos de E-Commerce
                especialmente enfocado en el Fullcommerce en otras palabras en el proceso completo desde que se genera la compra hasta
                que el pedido llega al cliente
              </p>

              </div>
              <div className='project-item-footer'>
                  <ul className='tecnology-tags'>
                      <li>SQL server</li>
                      <li>.NET Framework</li>
                      <li>Azure</li>
                      <li>Azure Webjobs</li>
                  </ul>
              </div>
          </div>

          <div className='project-item my-5'>
              <div className='poject-item-title'>
                <h2>Geogest (2019 - 2020)</h2>
              </div>
              <div className='project-item-content'>
                <p>
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
                </p>
              </div>
              <div className='project-item-footer'>
              <ul className='tecnology-tags'>
                      <li>SQL server</li>
                      <li>.NET Framework</li>
                      <li>Azure</li>
                      <li>Azure Webjobs</li>
                  </ul>
              </div>
          </div>

          <div className='project-item my-5'>
          <div className='poject-item-title'>
                <h2>Telmex (Freelance)</h2>
              </div>
              <div className='project-item-content'>
                <p>
                  Colaboración en la creación de un buscador para toda la aplicación
                  utilizando tecnicas de indexación y sincronización de base de datos relacional
                  a base de datos nosql para la lectura de datos MongoDB
                </p>
              </div>
              <div className='project-item-footer'>
              <ul className='tecnology-tags'>
                      <li>SQL server</li>
                      <li>MongoDB</li>
                      <li>.NET 6</li>
                      <li>Telerik</li>
                  </ul>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App