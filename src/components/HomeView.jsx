import React from 'react'
import ControlsContainer from './ControlsContainer'
import CardContainer from './CardContainer'
export default function HomeView({countries}) {
  return (
    <>
        <ControlsContainer></ControlsContainer>
        <CardContainer countries={countries}></CardContainer>
    </>
  )
}
