import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorDiv = styled.div`
  margin: auto;
  max-width: 1240px;
  color: #ff6060;
  text-align: center;
  display: flex;
  flex-direction: column;
`
const ErrorTitle = styled.h1`
  height: 263px;
  margin-top: 100px;
  font-weight: 700;
  font-size: 288px;
`
const ErrorText = styled.p`
  font-size: 36px;
  margin-top: 60px;
`
const ErrorLink = styled(Link)`
  margin-top: 182px;
  margin-bottom: 159px;
  font-size: 18px;
  color: #ff6060;
`

function Error() {
  return (
    <ErrorDiv>
      <ErrorTitle>404</ErrorTitle>
      <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
      <ErrorLink to="/">Retourner sur la page d’accueil</ErrorLink>
    </ErrorDiv>
  )
}

export default Error
