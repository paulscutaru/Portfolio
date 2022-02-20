import React from 'react';
import Thumbnail from './Thumbnail.js';
import './App.css';

import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Projects(props) {
  return (
    <Container className="projects margin-top" >
      <h4>Projects</h4>
      <Thumbnail
        link="https://www.youtube.com/watch?v=X05JS7iZ_80"
        image="soundmaker.png"
        title="SoundMaker"
        description="My final year project. A web tool for creating, processing and editing
        sounds and simple musical elements. Has its own API for authentication,
        managing stored sounds and sharing them with other users. Created
        with Express.js, Node.js, React.js, Tone.js, MySQL."
      />
      <Thumbnail
        link="www.github.com/paulscutaru/Plant-Web-Organizer"
        image="plantsweborganizer.png"
        title="Plants Web Organizer"
        description="A website for keeping and visualizing an inventory of plants, with photos,
      details and categories. It offers features of filtering, changing and adding
      plants. Written in PHP, Javascript, HTML/CSS with MySQL."
      />
      <Thumbnail
        link="https://paulscutaru.github.io/explominer-2d/"
        image="explominer-2d.png"
        title="Explominer 2D"
        description="A small game made with React.js and React boostrap."
      />
      <Thumbnail
        link="https://github.com/Elaech/A7-IP"
        image=""
        title="Tutoring Platform"
        description="During my Software Engineering module at faculty, I was part of the
        frontend development team in building the frontend of a tutoring
        platform for students. With this project I learned React.js."
      />
      <Thumbnail
        link="https://github.com/paulscutaru/Setup-Exchange-Protocol-of-E-Commerce"
        image=""
        title="Implementation of Setup-Exchange-Protocol-of-E-Commerce"
        description="Python implementation of the Setup-Exchange-Protocol with Bank, Merchant, Payment Gateway and Customer.
        It implements a secure transaction between client and merchant through the payment gateway, with encryption and digital signatures."
      />
    </Container>
  )
}

export default Projects;