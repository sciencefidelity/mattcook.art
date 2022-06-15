import React, { FC } from "react"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`
// background: ${props => props.primary ? "white" : "palevioletred"}
// color: ${props => props.primary ? "white" : "palevioletred"}
const Button = styled.button`
  background-color: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-decoration: none;
`

const TomatoButton = styled(Button)`
  background-color: tomato;
  border-color: tomato;
`

const ReversedButton = props => (
  <Button
    {...props}
    children={props.children.split("").reverse()}
  />
)

const Index: FC = () => {
  return (
    <>
      <Wrapper>
        <Title>
          Hello World!
        </Title>
      </Wrapper>
      <Button>Normal</Button>
      <TomatoButton as="a" href="#">Tomato</TomatoButton>
      <Button as={ReversedButton}>Primary</Button>
    </>
  )
}
export default Index
