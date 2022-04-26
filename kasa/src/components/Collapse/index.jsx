// import PropTypes from 'prop-types'
import styled from 'styled-components'
import arrow from '../../assets/arrow.svg'

import { useState } from 'react'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  return (
    <CollapseDiv>
      <CollapseTitle>
        {title}
        <CollapseButton type="button" onClick={() => toggle()}>
          <CollapseImg src={arrow} alt="Ouvir" isOpen={isOpen} />
        </CollapseButton>
      </CollapseTitle>
      <CollapseContent isOpen={isOpen}>{content}</CollapseContent>
    </CollapseDiv>
  )
}

// Collapse.propTypes = {
//   title: PropTypes.object,
//   text: PropTypes.string,
// }

export default Collapse

const CollapseDiv = styled.div`
  width: 100%;
  font-size: 24px;
  position: relative;
  padding-bottom: 33px;
  margin-bottom: 33px;

  @media screen and (max-width: 727px) {
    padding-bottom: 20px;
  }
`

const CollapseTitle = styled.div`
  font-size: 24px;
  position: absolute;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 18px;
  height: 47px;
  background-color: #ff6060;
  border-radius: 10px;
  color: white;

  @media screen and (max-width: 727px) {
    height: 30px;
    font-size: 13px;
    border-radius: 5px;
    padding-left: 11px;
  }
`
const CollapseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40px;
  margin-right: 24px;

  @media screen and (max-width: 727px) {
    height: 30px;
    font-size: 15px;
    margin-right: 0;
  }
`
const CollapseImg = styled.img`
  height: 14px;
  width: 23px;

  @media screen and (max-width: 727px) {
    height: 9px;
    width: 15px;
  }

  ${({ isOpen }) => !isOpen && `transform: rotate(180deg)`}
`

const CollapseContent = styled.div`
  transform: translateY(25px);
  background-color: #f6f6f6;
  color: #ff6060;
  padding: 52px 18px;
  padding-bottom: 27px;
  border-radius: 5px;

  @media screen and (max-width: 727px) {
    padding: 23px 11px;
  }

  ${({ isOpen }) => !isOpen && `display:none`}
`
