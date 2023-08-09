import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Col, Nav } from 'react-bootstrap'


const About = () => {
  return (
    <Col  md={3} lg={3} style={{ color: 'white' }} className="sticky-column">
    <h1>Luis Bustamante</h1>
    <h2>Software Developer</h2>
    <p>I build accessible products and digital experiences for the web. and additional to this I create music for your ear.</p>
    <nav className='navigation-items'>
      <ul>
        <li><a href='' rel="noopener noreferrer">Sobre mi</a></li>
        <li><a href='' rel="noopener noreferrer">Experiencia</a></li>
        <li><a href='' rel="noopener noreferrer">Proyectos</a></li>
        <li><a href='' rel="noopener noreferrer">Habilidades</a></li>
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
  )
}

export default About
