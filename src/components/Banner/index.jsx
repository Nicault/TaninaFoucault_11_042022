import styled from 'styled-components'
// import home_banner from '../../assets/home_banner.svg'

function Banner(props) {
  return (
    <BannerDiv>
      <BannerImg src={props.bg} alt="Bannière" />
      <BannerTitle>{props.txt}</BannerTitle>
    </BannerDiv>
  )
}

export default Banner

const BannerDiv = styled.div`
  height: 223px;
  position: relative;
  margin-bottom: 50px;

  @media screen and (max-width: 727px) {
    height: 111px;
  }
`
const BannerImg = styled.img`
  object-fit: none;
  border-radius: 25px;
  filter: brightness(0.7);
  width: 100%;
  height: 223px;

  @media screen and (max-width: 727px) {
    border-radius: 10px;
    height: 111px;
  }
`
const BannerTitle = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 48px;
  color: white;

  @media screen and (max-width: 727px) {
    width: 217px;
    font-size: 24px;
    text-align: left;
    margin-left: 16px;
  }
`
