import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './Projet1.css'

function Projet1() {
  return (
    <Container className='projet1-container'>
      <Row>
        <Col xs={12} md={4}>
          <Image
            src='/images/images.png'
            alt='Image 1 du Projet 1'
            className='image'
            fluid
          />
        </Col>
        <Col xs={12} md={4}>
          <Image
            src='/images/images (1).png'
            alt='Image 2 du Projet 1'
            className='image'
            fluid
          />
        </Col>
        <Col xs={12} md={4}>
          <Image
            src='/images/images (2).png'
            alt='Image 3 du Projet 1'
            className='image'
            fluid
          />
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <h1>Projet 1</h1>
          <p>
            Création d&apos;un logo et du maquette d&apos;un site web et
            application mobile d&apos;une pizziria pour mon projet de fin
            d&apos;étude.
          </p>
          <ul>
            <h2>technologies utilisées</h2>
            <li>Adobe Photoshop </li>
            <li>Adobe Illustrator </li>
            <li>Adobe Color (site web)</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Projet1
