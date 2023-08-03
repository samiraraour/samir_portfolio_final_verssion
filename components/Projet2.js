import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './Projet2.css'

function Projet2() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <Image
            src='/images/im1.png'
            alt='Image 1 du Projet 2'
            className='image'
            fluid
          />
        </Col>
        <Col xs={12} md={4}>
          <Image
            src='/images/im2.png'
            alt='Image 2 du Projet 2'
            className='image'
            fluid
          />
        </Col>
        <Col xs={12} md={4}>
          <Image
            src='/images/im3.png'
            alt='Image 3 du Projet 2'
            className='image'
            fluid
          />
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <h1>Projet 2</h1>
          <p>
            Couverture vidéo et photo d&apos;un événement touristique (camping)
            a la ville d&apos;Oran,Algérie
          </p>
          <h2>technologies utilisées</h2>
          <ul>
            <li>Adobe Photoshop</li>
            <li>Adobe Premiere pro</li>
            <li>DSLR Canon 80D Obj 70-200 mm</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Projet2
