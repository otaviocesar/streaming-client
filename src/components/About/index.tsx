import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function AboutComponent() {
  return (
    <Container fluid>
      <Row>
        <Col sm>
          <img src="img/gif-about.png" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  )
}

export default AboutComponent
