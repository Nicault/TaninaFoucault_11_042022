import styled from 'styled-components'
// import home_banner from '../../assets/home_banner.svg'

const BannerDiv = styled.div`
  height: 223px;
  position: relative;
`
const BannerImg = styled.img`
  object-fit: cover;
  border-radius: 25px;
  filter: brightness(0.7);
`
const BannerTitle = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 48px;
  color: white;
`

function Banner(props) {
  const bg = props.bg
  const txt = props.txt
  return (
    <BannerDiv>
      <BannerImg src={bg} alt="Bannière" />
      <BannerTitle>{txt}</BannerTitle>
    </BannerDiv>
  )
}

export default Banner
