import datas from '../../datas.js'
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import styled from 'styled-components'
import home_banner from '../../assets/home_banner.svg'
import { Link } from 'react-router-dom'

const HomeDiv = styled.div`
  max-width: 1240px;
  margin: auto;
`

const BGDiv = styled.div`
  background-color: #f7f7f7;
  border-radius: 25px;
  margin-top: 43px;
  padding: 56px 50px;
`

const CardsDiv = styled.div`
  display: grid;
  gap: 60px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`
const CardLink = styled(Link)``

const title = 'Chez vous, partout et ailleurs'

function Home() {
  return (
    <HomeDiv>
      <Banner bg={home_banner} txt={title} />
      <BGDiv>
        <CardsDiv>
          {datas.map((profile) => (
            <CardLink
              to={`/FicheLogement:${profile.id}`}
              state={profile}
              key={profile.id}
            >
              <Card
                houseId={profile.id}
                cover={profile.cover}
                title={profile.title}
              />
            </CardLink>
          ))}
        </CardsDiv>
      </BGDiv>
    </HomeDiv>
  )
}

export default Home
