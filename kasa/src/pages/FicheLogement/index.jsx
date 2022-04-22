import React, { useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import red_star from '../../assets/red_star.svg'
import grey_star from '../../assets/grey_star.svg'
// import List from '../../components/List'
import Carousel from '../../components/Carousel'

const PageDiv = styled.div`
  max-width: 1240px;
  margin: auto;
`
const SecondBannerDiv = styled.div`
  color: #ff6060;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TitleDiv = styled.div``

const Title = styled.h1`
  font-size: 36px;
  line-height: 51px;
`

const Location = styled.p`
  font-size: 18px;
`

const HostDiv = styled.div`
  display: flex;
  align-items: center;
`

const HostName = styled.p`
  height: 52px;
  width: 93px;
  font-size: 18px;
  text-align: right;
`

const HostPic = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 100%;
  object-fit: cover;
  margin-left: 10px;
`

const ThirdBannerDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`

const TagsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Tag = styled.p`
  height: 25px;
  border-radius: 10px;
  background-color: #ff6060;
  padding: 3px 30px;
  margin-right: 10px;
  color: white;
`

const StarsDiv = styled.div``

const RedStar = styled.img`
  margin-left: 10px;
`

const GreyStar = styled.img`
  margin-left: 10px;
`

const FourthDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`

const DescriptionBloc = styled.div`
  position: relative;
  width: 582px;
  margin-right: 76px;
  margin-bottom: 42px;
`

const DescriptionTitle = styled.h2`
  position: absolute;
  z-index: 2;
  width: 100%;
  background-color: #ff6060;
  color: white;
  border-radius: 10px;
  font-size: 18px;
  height: 52px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`

const DescriptionText = styled.p`
  transform: translateY(42px);
  min-height: 249px;
  background-color: #f7f7f7;
  border-radius: 10px;
  color: #ff6060;
  padding: 30px 20px;
  font-size: 18px;
  line-height: 26px;
`

const EquipmentsBloc = styled.div`
  position: relative;
  width: 582px;
  margin-bottom: 42px;
`

const EquipmentsTitle = styled.h2`
  position: absolute;
  z-index: 2;
  width: 100%;
  background-color: #ff6060;
  color: white;
  border-radius: 10px;
  font-size: 18px;
  height: 52px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`

const EquipmentsList = styled.ul`
  transform: translateY(42px);
  min-height: 249px;
  background-color: #f7f7f7;
  border-radius: 10px;
  color: #ff6060;
  padding: 30px 20px;
  font-size: 18px;
  line-height: 26px;
`

const EquipementsElement = styled.li``

function FicheLogement() {
  const location = useLocation()
  const data = location.state

  const range = [1, 2, 3, 4, 5]

  const [pic, updatePic] = useState(0)

  const nbOfPictures = data.pictures.length

  return (
    <PageDiv>
      {/* <FirstBannerDiv>
        <BannerImg src={data.cover} alt={data.title} />
      </FirstBannerDiv> */}
      <Carousel
        pic={pic}
        updatePic={updatePic}
        nbOfPictures={nbOfPictures}
        src={data.pictures[pic]}
      ></Carousel>
      <SecondBannerDiv>
        <TitleDiv>
          <Title>{data.title}</Title>
          <Location>{data.location}</Location>
        </TitleDiv>
        <HostDiv>
          <HostName>{data.host.name}</HostName>
          <HostPic src={data.host.picture} alt={data.host.name} />
        </HostDiv>
      </SecondBannerDiv>
      <ThirdBannerDiv>
        <TagsDiv>
          {data.tags.map((tag) => (
            <Tag key={`${tag}-${data.id}`}>{tag}</Tag>
          ))}
        </TagsDiv>
        <StarsDiv>
          {range.map((rangeElem) =>
            data.rating >= rangeElem ? (
              <RedStar
                key={rangeElem.toString()}
                src={red_star}
                alt="étoile pleine"
              />
            ) : (
              <GreyStar
                key={rangeElem.toString()}
                src={grey_star}
                alt="étoile grisée"
              />
            )
          )}
        </StarsDiv>
      </ThirdBannerDiv>
      <FourthDiv>
        <DescriptionBloc>
          <DescriptionTitle>Description</DescriptionTitle>
          <DescriptionText>{data.description}</DescriptionText>
        </DescriptionBloc>
        <EquipmentsBloc>
          <EquipmentsTitle>Equipements</EquipmentsTitle>
          <EquipmentsList>
            {data.equipments.map((equipment) => (
              <EquipementsElement key={`${equipment}-${data.id}`}>
                {equipment}
              </EquipementsElement>
            ))}
          </EquipmentsList>
        </EquipmentsBloc>
      </FourthDiv>
    </PageDiv>
  )
}

export default FicheLogement
