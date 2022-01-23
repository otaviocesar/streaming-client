import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Contact() {
  return (
    <div className="contact-container-bg">
      <Container className="contact-component">
        <Row>
          <Col xs={12} md={6}>
            <h1>Streaming</h1>
            <p>Integração de Mídias Sociais</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
