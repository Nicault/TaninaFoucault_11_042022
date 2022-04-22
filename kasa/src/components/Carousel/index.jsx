import React from 'react'
import styled from 'styled-components'
import carouselArrow from '../../assets/carouselArrow.svg'

function Carousel(props) {
  const handlePrevClick = () => {
    props.pic > 0
      ? props.updatePic(props.pic - 1)
      : props.updatePic(props.nbOfPictures - 1)
  }

  const handleNextClick = () => {
    props.pic < props.nbOfPictures - 1
      ? props.updatePic(props.pic + 1)
      : props.updatePic(0)
  }

  const moreThanOne = props.nbOfPictures > 1
  console.log(moreThanOne)

  console.log(props.pic)
  return (
    <BannerDiv>
      {moreThanOne && (
        <PrevArrowButton onClick={() => handlePrevClick()}>
          <Arrow src={carouselArrow} alt="Précédent" />
        </PrevArrowButton>
      )}
      <BannerImage src={props.src} alt="Logement" />
      {moreThanOne && (
        <Nth>
          {props.pic + 1}/{props.nbOfPictures}
        </Nth>
      )}
      {moreThanOne && (
        <NextArrowButton onClick={() => handleNextClick()}>
          <Arrow src={carouselArrow} alt="Suivant" />
        </NextArrowButton>
      )}
    </BannerDiv>
  )
}

export default Carousel

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
