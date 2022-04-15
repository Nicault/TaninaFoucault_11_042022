// import { useState } from 'react'
import a_propos_banner from '../../assets/a_propos_banner.svg'
import Banner from '../../components/Banner'
import styled from 'styled-components'
import List from '../../components/List'

const AProposDiv = styled.div`
  max-width: 1240px;
  margin: auto;
`
const BGDiv = styled.div`
  padding: 33px 140px;
`

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
  return (
    <AProposDiv>
      <Banner bg={a_propos_banner} />
      <BGDiv>
        {bloc_list.map((element) => (
          <List key={element.title} title={element.title} text={element.text} />
        ))}
      </BGDiv>
    </AProposDiv>
  )
}

export default APropos
