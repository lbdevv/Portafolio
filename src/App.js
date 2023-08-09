import React from 'react'
import './portafolio.css'
import { Container, Row } from 'react-bootstrap';
import Content from './Components/Content';
import About from './Components/About';
import Skills from './Components/Skills';

const App = () => {
  return (
    <Container className='my-5'>
      <Row>
        <About />
        <Content />
        <Skills />
      </Row>
    </Container>
  )
}

export default App