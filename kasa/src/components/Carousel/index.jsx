import React from 'react'
import styled from 'styled-components'
import carouselArrow from '../../assets/carouselArrow.svg'

const BannerDiv = styled.div`
  position: relative;
`

const BannerImage = styled.img`
  height: 415px;
  width: 1240px;
  border-radius: 25px;
  object-fit: cover;
`
const PrevArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  transform: rotate(180deg);
  top: 0;
  left: 0;
  padding: 0 25px;
`

const NextArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 25px;
`
const Arrow = styled.img``

const Nth = styled.p`
  position: absolute;
  bottom: 25px;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 18px;
`

function Carousel(props) {
  return (
    <BannerDiv>
      <PrevArrowButton>
        <Arrow src={carouselArrow} alt="Précédent" />
      </PrevArrowButton>
      <BannerImage src={props.src} alt="Logement" />
      <Nth>
        {props.actualPicture}/{props.nbOfPictures}
      </Nth>
      <NextArrowButton>
        <Arrow src={carouselArrow} alt="Suivant" />
      </NextArrowButton>
    </BannerDiv>
  )
}

export default Carousel
