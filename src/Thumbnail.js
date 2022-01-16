import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import './App.css';

function Thumbnail(props) {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} sm={6} md={6}>
                    <Card bg="dark" text="light" className="project">
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Img variant="top" className="project-image" src={props.image} />
                            <Card.Text>{props.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a target="_blank" href={props.link}>{props.link}</a>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Thumbnail;