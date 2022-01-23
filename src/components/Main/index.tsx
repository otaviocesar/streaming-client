import About from 'components/About'
import Contact from 'components/Contact'
import Download from 'components/Download'
import Top from 'components/Top'
import * as S from './styles'
import { Container, Row, Col } from 'react-bootstrap'

const Main = ({
  title = 'Streaming',
  description = 'Integração de Mídias Sociais'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Um logotipo com a letra S" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    <Container>
      <Top />
      <Row>
        <Col sm>
          <Download />
        </Col>
      </Row>
    </Container>
    <Contact />
    <footer className="footer">
      <h5>Streaming &copy; otavio.cesar@discente.ufma.br</h5>
    </footer>
  </S.Wrapper>
)

export default Main
