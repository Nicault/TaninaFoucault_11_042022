import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardLink = styled(Link)`
  height: 340px;
  width: 340px;
  position: relative;
`
const CardImg = styled.img`
  height: 340px;
  width: 340px;
  border-radius: 10px;
  object-fit: cover;
`

const CardTitle = styled.h2`
  position: absolute;
  bottom: 0px;
  margin: 20px;
  font-size: 18px;
  color: white;
`

function Card({ title, cover, houseId }) {
  return (
    <CardLink to={`/FicheLogement:${houseId}`}>
      <CardImg src={cover} alt="Logement" />
      <CardTitle>{title}</CardTitle>
    </CardLink>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.string,
  houseId: PropTypes.string,
}

export default Card
