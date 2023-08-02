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
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default App