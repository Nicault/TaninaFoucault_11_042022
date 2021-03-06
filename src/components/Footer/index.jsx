import styled from 'styled-components'
import logoFoot from '../../assets/logoFoot.svg'

function Footer() {
  return (
    <FooterDiv>
      <FooterBG>
        <FooterImg src={logoFoot} alt="Logo Kasa" />
        <FooterText>© 2020 Kasa. All rights reserved</FooterText>
      </FooterBG>
    </FooterDiv>
  )
}

export default Footer

const FooterDiv = styled.div`
  height: 209px;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media screen and (max-width: 727px) {
  }
`
const FooterBG = styled.div`
  position: relative;
  background-color: black;
  height: 209px;
  text-align: center;
`
const FooterImg = styled.img`
  width: 122px;
  margin-top: 66px;
`

const FooterText = styled.p`
  width: 513px;
  color: white;
  font-size: 24px;
  position: absolute;
  bottom: 29px;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (max-width: 727px) {
    font-size: 12px;
    bottom: 62px;
    transform: translateX(-50%);
  }
`
