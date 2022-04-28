import React, { useState } from 'react'
import styled from 'styled-components'
import red_star from '../../assets/red_star.svg'
import grey_star from '../../assets/grey_star.svg'
import Collapse from '../../components/Collapse'
import Carousel from '../../components/Carousel'
import logements from '../../local-json/logements.json'

function FicheLogement({ id }) {
  const loadData = [...logements]
  const data = loadData.find((element) => element.id === id)

  const range = [1, 2, 3, 4, 5]

  const [currentPic, updatePic] = useState(0)
  const nbOfPictures = data.pictures.length

  return (
    <PageDiv>
      <Carousel
        currentPic={currentPic}
        updatePic={updatePic}
        nbOfPictures={nbOfPictures}
        src={data.pictures[currentPic]}
      ></Carousel>
      <FirstDiv>
        <SecondDiv>
          <TitleDiv>
            <Title>{data.title}</Title>
            <Location>{data.location}</Location>
          </TitleDiv>
          <TagsDiv>
            {data.tags.map((tag) => (
              <Tag key={`${tag}-${data.id}`}>{tag}</Tag>
            ))}
          </TagsDiv>
        </SecondDiv>
        <ThirdDiv>
          <HostDiv>
            <HostName>{data.host.name}</HostName>
            <HostPic src={data.host.picture} alt={data.host.name} />
          </HostDiv>

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
        </ThirdDiv>
      </FirstDiv>

      <FourthDiv>
        <DescriptionBloc>
          <Collapse
            title={<CollapseTitle>Description</CollapseTitle>}
            content={<DescriptionText>{data.description}</DescriptionText>}
          ></Collapse>
        </DescriptionBloc>
        <EquipmentsBloc>
          <Collapse
            title={<CollapseTitle>Equipements</CollapseTitle>}
            content={
              <EquipmentsList>
                {data.equipments.map((equipment) => (
                  <EquipementsElement key={`${equipment}-${data.id}`}>
                    {equipment}
                  </EquipementsElement>
                ))}
              </EquipmentsList>
            }
          ></Collapse>
        </EquipmentsBloc>
      </FourthDiv>
    </PageDiv>
  )
}

export default FicheLogement

const PageDiv = styled.div`
  max-width: 1240px;
  width: 100%;
  margin-top: 0;
  padding: 0 30px;

  @media screen and (max-width: 727px) {
    padding: 0 20px;
  }
`

const FirstDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 30px;
  @media screen and (max-width: 727px) {
    margin-top: 15px;
    flex-direction: column;
  }
`

const SecondDiv = styled.div`
  width: 65%;
  color: #ff6060;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 727px) {
    width: 100%;
  }
`

const TitleDiv = styled.div`
  padding-bottom: 20px;
`

const Title = styled.h1`
  font-size: 36px;
  line-height: 51px;

  @media screen and (max-width: 727px) {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 5px;
  }
`

const Location = styled.p`
  @media screen and (max-width: 727px) {
    font-size: 14px;
  }
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
  margin-bottom: 10px;
  color: white;
  font-size: 14px;

  @media screen and (max-width: 727px) {
    height: 18px;
    border-radius: 5px;
    font-size: 10px;
    padding: 2px 24px;
  }
`

const ThirdDiv = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 727px) {
    width: 100%;
    flex-direction: row-reverse;
    align-items: center;
  }
`

const HostDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 727px) {
  }
`

const HostName = styled.p`
  width: 93px;
  text-align: right;
  color: #ff6060;

  @media screen and (max-width: 727px) {
    font-size: 12px;
  }
`

const HostPic = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 100%;
  object-fit: cover;
  margin-left: 10px;

  @media screen and (max-width: 727px) {
    height: 32px;
    width: 32px;
  }
`

const StarsDiv = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;
  @media screen and (max-width: 727px) {
    position: relative;
    bottom: 0;
  }
`

const RedStar = styled.img`
  margin-left: 10px;
  @media screen and (max-width: 727px) {
    height: 15px;
    margin-left: 5px
`

const GreyStar = styled.img`
  margin-left: 10px;
  @media screen and (max-width: 727px) {
    height: 15px;
    margin-left: 5px;
  }
`

const FourthDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 727px) {
    flex-direction: column;
  }
  // justify-items: center;
  // flex-wrap: wrap;
`

const DescriptionBloc = styled.div`
  position: relative;
  width: 100%;
  margin-right: 76px;
  margin-bottom: 42px;
  @media screen and (max-width: 727px) {
    margin-bottom: 10px;
  }
`

const CollapseTitle = styled.h2`
  @media screen and (max-width: 727px) {
    font-size: 13px;
  }
`

const DescriptionText = styled.p`
  line-height: 26px;
  padding-bottom: 50px;
  width: 100%;
  @media screen and (max-width: 727px) {
    font-size: 12px;
    line-height: 17px;
    padding-bottom: 0;
  }
`

const EquipmentsBloc = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 42px;

  @media screen and (max-width: 727px) {
    margin-bottom: 30px;
  }
`

const EquipmentsList = styled.ul`
  padding-bottom: 50px;
  line-height: 26px;

  @media screen and (max-width: 727px) {
    font-size: 12px;
    line-height: 17px;
    padding-bottom: 0;
  }
`

const EquipementsElement = styled.li``
