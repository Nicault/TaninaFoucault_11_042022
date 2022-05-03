import logements from '../../local-json/logements.json'
import Card from '../../components/Card'
import styled from 'styled-components'
// import Banner from '../../components/Banner/index.jsx'
import home_banner from '../../assets/home_banner.svg'

function Home() {
  return (
    <HomePage>
      <BannerDiv>
        <BannerImg src={home_banner} alt="Bannière" />
        <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
      </BannerDiv>
      <BGDiv>
        <CardsDiv>
          {logements.map((profil) => (
            <Card
              key={profil.id}
              linkParam={profil.id}
              cover={profil.cover}
              title={profil.title}
            />
          ))}
        </CardsDiv>
      </BGDiv>
    </HomePage>
  )
}

export default Home

const HomePage = styled.div`
  max-width: 1240px;
  margin: 0 30px 50px 30px;
  @media screen and (max-width: 727px) {
    margin: 0 20px 30px 20px;
  }
`

const BannerDiv = styled.div`
  height: 223px;
  margin-bottom: 40px;
  position: relative;

  @media screen and (max-width: 727px) {
    height: 111px;
  }
`
const BannerImg = styled.img`
  object-fit: cover;
  border-radius: 25px;
  filter: brightness(0.7);
  width: 100%;
  height: 223px;

  @media screen and (max-width: 727px) {
    height: 111px;
    border-radius: 10px;
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

const BGDiv = styled.div`
  background-color: #f7f7f7;
  border-radius: 25px;
  padding: 56px 50px;

  @media screen and (max-width: 727px) {
    background-color: white;
    padding: 0;
  }
`

const CardsDiv = styled.div`
  display: grid;
  gap: 60px;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 727px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`
