// import Banner from '../../components/Banner'
import a_propos_banner from '../../assets/a_propos_banner.svg'
import mobile_banner from '../../assets/mobile_banner.svg'
import styled from 'styled-components'
import Collapse from '../../components/Collapse'

import { useState, useEffect } from 'react'

const bloc_list = [
  {
    title: 'Fiabilité',
    text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
  },
  {
    title: 'Respect',
    text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    title: 'Service',
    text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: 'Sécurité',
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

function APropos() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <AProposPage>
      <BannerDiv>
        {windowWidth > 727 ? (
          <BannerImg src={a_propos_banner} alt="Bannière" />
        ) : (
          <BannerImg src={mobile_banner} alt="Bannière" />
        )}
      </BannerDiv>
      <BGDiv>
        {bloc_list.map((element) => (
          <Collapse
            key={element.title}
            title={element.title}
            content={<TextContent>{element.text}</TextContent>}
          />
        ))}
      </BGDiv>
    </AProposPage>
  )
}

export default APropos

const AProposPage = styled.div`
  max-width: 1240px;
  margin: 0 30px;

  @media screen and (max-width: 727px) {
    margin: 0 20px;
  }
`
const BannerDiv = styled.div`
  height: 223px;
  position: relative;
  margin-bottom: 31px;
`
const BannerImg = styled.img`
  object-fit: cover;
  border-radius: 25px;
  filter: brightness(0.7);
  width: 100%;
  height: 223px;

  @media screen and (max-width: 727px) {
    border-radius: 10px;
    object-position: 100% 20%;
  }
`
const BGDiv = styled.div`
  padding: 30px 60px;
  @media screen and (max-width: 727px) {
    padding: 0;
    padding-bottom: 50px;
  }
`

const TextContent = styled.p`
  @media screen and (max-width: 727px) {
    font-size: 12px;
    padding-bottom: 52px;
  }
`
