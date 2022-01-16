import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Projects from './Projects.js';
import About from './About.js';
import Footer from './Footer'
import './App.css';

import { Container, Row, Col, Card, Navbar, Nav, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div >
      <Container className="main-container" >
        <Navbar bg="dark" variant="dark" expand="lg" >
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto navbar">
                <Nav.Link href="https://paulscutaru.github.io/Portfolio/#/projects" className="margin-sides">Projects</Nav.Link>
                <Nav.Link href="https://paulscutaru.github.io/Portfolio/#/" className="margin-sides">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} sm={3} md={3}>
              <Image src="portrait.jpg" className="margin-top" style={{ height: "200px" }} roundedCircle />
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
          <Route exact path="/" component={About}/>
          <Route exact path="/projects" component={Projects} />
        </Switch>

        <Footer/>
      </Container>
    </div>
  );
}

export default App;