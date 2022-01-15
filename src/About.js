import React from "react"

import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function About(props) {
  return (
    <Container className="about-container margin-top margin-bottom">
      <h4>About</h4>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={6} md={5}>
          <Card className="about margin-bottom" bg="dark" text="light">
            <Card.Body>
              <Card.Text>I've always been passionate about expanding my general knowledge and
                learning science. Thus, I chose a career in computer science because you can combine it with any domain, you can make an app about anything.</Card.Text>
              <Card.Text>I enjoy making little programs in my free time, like simple algorithms or testing things out, watching computers science videos and reading articles.</Card.Text>
              <Card.Text>Some of my interests also include cybersecurity and cryptography.</Card.Text>
              <Card.Footer>Also, I make music as a hobby and post it on YouTube.</Card.Footer>
            </Card.Body>
          </Card>
          <Card className="about margin-bottom" bg="dark" text="light">
            <Card.Body>
              <Card.Title>Skills & Technologies:</Card.Title>
              <Card.Text>• Javascript (Node.js, React.js, Express.js)</Card.Text>
              <Card.Text>• Linux</Card.Text>
              <Card.Text>• C/C++</Card.Text>
              <Card.Text>• Java</Card.Text>
              <Card.Text>• Python</Card.Text>
              <Card.Text>• PHP</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About;