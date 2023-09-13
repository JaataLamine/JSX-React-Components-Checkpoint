import React from 'react'
import 'holderjs'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function REACTJSCheckpoint () {
  return (
    <React.Fragment>
      <div className='App'>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#feartures">Feartures</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <h1>Here is the heading</h1>
        <Row xs={2} md={4} className="g-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body className="bg-secondary shadow-1-strong">
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </React.Fragment>
  )
}

function App() {
  return (
    <REACTJSCheckpoint />
  )
}

export default App