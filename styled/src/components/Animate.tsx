import React, { FC } from "react"
import styled, { keyframes } from "styled-components"

// function rotationBuilder() {
//   const rotation = keyframes`
//     from { transform: rotate(0deg); }
//     to { transform: rotate(360deg); }
//   `
//   return rotation
// }

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const SolarSystem = styled.div`
  position: relative;
  width: 90%;
  margin: auto;
`

const Rotate = styled.div`
  display: block;
  animation: 8s ${rotate} linear infinite;
  padding: 2rem 1rem;
  font-size: 5rem;
`

const Spin = styled.span`
  display: inline-block;
  animation: 3s ${rotate} linear infinite;
`

const Planet = styled.div`
  position: absolute;
  font-size: 12rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Animate: FC = () => {
  return (
    <SolarSystem>
      <Rotate><Spin>🧶</Spin></Rotate>
      <Planet>🌍</Planet>
    </SolarSystem>
  )
}
