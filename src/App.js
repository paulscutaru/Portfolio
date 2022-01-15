import React from 'react';
import { BrowserRouter, Route, Link, Switch, Router } from 'react-router-dom';
import Projects from './Projects.js';
import About from './About.js';
import './App.css';

import { Container, Row, Col, Button, Card, Form, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Container className="main-container" >
        <Navbar bg="dark" variant="dark" expand="lg" >
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto navbar">
                <Nav.Link href="projects" className="margin-sides">Projects</Nav.Link>
                <Nav.Link href="about" className="margin-sides">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} sm={3} md={3}>
              <Image src="portrait.jpg" className="margin-top" style={{ height: "210px" }} roundedCircle />
            </Col>
            <Col xs={12} sm={4} md={4}>
              <Card className="margin-top" bg="light" text="dark">
                <Card.Body>
                  <Card.Title>Scutaru Paul-Alexandru.</Card.Title>
                  <Card.Text>I am a 22 years old graduate passionate about Web technologies.</Card.Text>
                  <Card.Text>Contact:</Card.Text>
                  <Card.Text>• paulscutaru99@gmail.com</Card.Text>
                  <Card.Text>• <a target="_blank" href="https://www.linkedin.com/in/paul-alexandru-scutaru-301044221/">LinkedIn</a></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/" component={About} />
        </Switch>


      </Container>
    </BrowserRouter>
  );
}

export default App;