import * as S from './styles'

const Main = ({
  title = 'Streaming',
  description = 'Integração de Mídias Sociais'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Um logotipo com a letra S" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.LogoConnect
      src="/img/connect-midia.svg"
      alt="Arte que mostra a conexão com várias mídias sociais"
    />
  </S.Wrapper>
)

export default Main
