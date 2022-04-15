import styled from 'styled-components'
import datas from '../../datas.js'

const PageDiv = styled.div`
  max-width: 1240px;
  margin: auto;
`
const BannerDiv = styled.div``

const BannerImg = styled.img``

const TitleDiv = styled.div``

function FicheLogement() {
  return (
    <PageDiv>
      <BannerDiv>
        <BannerImg />
      </BannerDiv>
      <TitleDiv></TitleDiv>
    </PageDiv>
  )
}

export default FicheLogement
