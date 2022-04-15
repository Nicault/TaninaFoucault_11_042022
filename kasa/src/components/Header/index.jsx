import { Link } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../../assets/logo.svg'

const HeaderDiv = styled.div`
  margin: 40px auto 60px auto;
  max-width: 1240px;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const HeaderImg = styled.img`
  height: 68px;
`
const HeaderNav = styled.nav``
const HeaderLink = styled(Link)`
  color: #ff6060;
  font-size: 24px;
  fonct-weight: 500px;
  margin-left: 57px;
`

function Header() {
  return (
    <HeaderDiv>
      <HeaderImg src={logo} alt="Logo" />
      <HeaderNav>
        <HeaderLink to="/">Accueil</HeaderLink>
        <HeaderLink to="/APropos">A propos</HeaderLink>
      </HeaderNav>
    </HeaderDiv>
  )
}

export default Header
