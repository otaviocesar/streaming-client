import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import * as S from './styles'
import { LogoConnect } from 'components/Main/styles'
import About from 'components/About'

function Top() {
  return (
    <Row>
      <Col sm>
        <img className="img-fluid" src="/img/mobile.png" />
      </Col>
      <Col sm>
        <h1>Sempre presente</h1>
        <p>
          Conecte suas mídias sociais com o Streaming e gerencie tudo em um só
          lugar!
        </p>
        <LogoConnect
          src="/img/connect-midia.svg"
          alt="Arte que mostra a conexão com várias mídias sociais"
        />
      </Col>
      <Col sm>
        <About />
      </Col>
    </Row>
  )
}

export default Top
