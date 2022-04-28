import React from 'react'
import styled from 'styled-components'
import carouselArrow from '../../assets/carouselArrow.svg'

function Carousel({ currentPic, updatePic, nbOfPictures, src }) {
  const handlePrevClick = () => {
    currentPic > 0 ? updatePic(currentPic - 1) : updatePic(nbOfPictures - 1)
  }

  const handleNextClick = () => {
    currentPic < nbOfPictures - 1 ? updatePic(currentPic + 1) : updatePic(0)
  }

  const moreThanOne = nbOfPictures > 1

  return (
    <BannerDiv>
      {moreThanOne && (
        <PrevArrowButton onClick={() => handlePrevClick()}>
          <Arrow src={carouselArrow} alt="Précédent" />
        </PrevArrowButton>
      )}
      <BannerImage src={src} alt="Logement" />
      {moreThanOne && (
        <Nth>
          {currentPic + 1}/{nbOfPictures}
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
  // max-width: 1240px;
  margin: auto;
  position: relative;
  height: 415px;

  @media screen and (max-width: 727px) {
    height: 255px;
  }
`

const BannerImage = styled.img`
  height: 415px;
  width: 100%;
  border-radius: 25px;
  object-fit: none;

  @media screen and (max-width: 727px) {
    border-radius: 10px;
    height: 255px;
    object-fit: cover;
  }
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

  @media screen and (max-width: 727px) {
    padding: 0 6px 0 20px;
  }
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

  @media screen and (max-width: 727px) {
    padding: 0 6px 0 20px;
  }
`
const Arrow = styled.img`
  @media screen and (max-width: 727px) {
    height: 20px;
  }
`

const Nth = styled.p`
  position: absolute;
  bottom: 25px;
  width: 100%;
  text-align: center;
  color: white;

  @media screen and (max-width: 727px) {
    display: none;
  }
`
