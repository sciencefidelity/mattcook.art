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
  font-size: 2.4rem;
`

export const Button = styled("button")<{disabled?: boolean}>`
  color: ${props => props.disabled ? "white" : "white"};
  background-color: ${props => props.disabled ? "lightgrey" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.disabled ? "lightgrey" : "palevioletred"};
  border-radius: 3px;
  text-decoration: none;
  cursor: ${props => props.disabled ? "default" : "pointer"};
  font-weight: 900;
  transition: color 0.4s, background-color 0.4s, border 0.4s;
`

export const Counter: FC = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count => count + 1)
  const decrement = () => setCount(count => count - 1)

  const hasPrev = count > 0
  const hasNext = count < 99

  return (
    <StyledCounter>
      <Button disabled={!hasPrev} onClick={decrement}>–</Button>
      <Paragraph>{count}</Paragraph>
      <Button disabled={!hasNext} onClick={increment}>+</Button>
    </StyledCounter>
  )
}
