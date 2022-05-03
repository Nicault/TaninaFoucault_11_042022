import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Card({ linkParam, cover, title }) {
  return (
    <CardDiv>
      <Link to={`/${linkParam}`}>
        <CardImg src={cover} alt="Logement" />
        <CardTitle>{title}</CardTitle>
      </Link>
    </CardDiv>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.string,
  houseId: PropTypes.string,
}

export default Card

const CardDiv = styled.div`
  height: 340px;
  width: 340px;
  position: relative;

  @media screen and (max-width: 727px) {
    width: 100%;
    height: auto;
  }
`
const CardImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`

const CardTitle = styled.h2`
  position: absolute;
  bottom: 0px;
  margin: 20px;
  color: white;
`
