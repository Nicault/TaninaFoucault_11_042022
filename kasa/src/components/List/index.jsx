import PropTypes from 'prop-types'
import styled from 'styled-components'
import arrow from '../../assets/arrow.svg'

const ListDiv = styled.div`
  padding-bottom: 33px;
`

const ListTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 18px;
  height: 47px;
  background-color: #ff6060;
  border-radius: 5px 5px 0 0;
  color: white;
  font-size: 24px;
`
const ListButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40px;
  margin-right: 24px;
`
const ListImg = styled.img`
  height: 14px;
  width: 23px;
  transform: rotate(180deg);
`

const ListText = styled.p`
  // display: none;
  background-color: #f6f6f6;
  color: #ff6060;
  padding: 27px 18px;
  border-radius: 0 0 5px 5px;
`

function List({ title, text }) {
  return (
    <ListDiv>
      <ListTitle>
        {title}
        <ListButton type="button" class="button">
          <ListImg src={arrow} alt="Ouvir" />
        </ListButton>
      </ListTitle>
      <ListText>{text}</ListText>
    </ListDiv>
  )
}

List.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

export default List
