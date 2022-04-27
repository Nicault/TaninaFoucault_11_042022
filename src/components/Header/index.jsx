import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <HeaderDiv>
      <HeaderImg src={logo} alt="Logo" />

      <HeaderNav className="headerNav">
        <HeaderLink className="headerLink" activeclassname="active" to="/">
          Accueil
        </HeaderLink>
        <HeaderLink
          className="headerLink"
          activeclassname="active"
          to="/Apropos"
        >
          A propos
        </HeaderLink>
      </HeaderNav>
    </HeaderDiv>
  )
}

export default Header

const HeaderDiv = styled.div`
  width: 100%;
  margin: 40px auto 60px auto;
  max-width: 1240px;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  @media screen and (max-width: 727px) {
    margin: 20px auto;
    padding: 0 20px;
  }
`
const HeaderImg = styled.img`
  height: 68px;

  @media screen and (max-width: 727px) {
    height: 47px;
  }
`

const HeaderNav = styled.nav`
  font-size: 24px;

  @media screen and (max-width: 727px) {
    font-size: 12px;
    text-transform: uppercase;
  }
`

const HeaderLink = styled(NavLink)`
  color: #ff6060;
  margin-left: 57px;

  @media screen and (max-width: 727px) {
    margin-left: 10px;
  }
`
