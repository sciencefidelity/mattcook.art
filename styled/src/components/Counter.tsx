import React, { FC, useState } from "react"
import styled from "styled-components"

const StyledCounter = styled.div`
  border: 2px solid palevioletred;
  display: inline-block;
  border-radius: 7px;
`

const Paragraph = styled.p`
  display: inline-block;
  color: rebeccapurple;
  width: 4rem;
  text-align: center;
  font-weight: 900;
`

export const Button = styled("button")<{primary?: boolean}>`
  background-color: ${props => props.primary ? "white" : "palevioletred"};
  color: ${props => props.primary ? "palevioletred" : "white"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-decoration: none;
`

const CounterButton = styled(Button)`
  cursor: pointer;
  font-weight: 900;
`

export const Counter: FC = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <StyledCounter>
      <CounterButton onClick={decrement}>–</CounterButton>
      <Paragraph>{count}</Paragraph>
      <CounterButton onClick={increment}>+</CounterButton>
    </StyledCounter>
  )
}
