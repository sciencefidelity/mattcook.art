import React, { FC, useState } from "react"
import styled from "styled-components"

const StyledCounter = styled.div`

`

const Paragraph = styled.p`
  display: inline-block;
  color: rebeccapurple;
  width: 4rem;
  text-align: center;
  font-weight: 900;
`

const Button = styled("button")<{primary?: boolean}>`
  background-color: ${props => props.primary ? "white" : "palevioletred"};
  color: ${props => props.primary ? "palevioletred" : "white"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-decoration: none;
  display: inline;
`

export const Counter: FC = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <StyledCounter>
      <Button onClick={decrement}>-</Button>
      <Paragraph>{count}</Paragraph>
      <Button onClick={increment}>+</Button>
    </StyledCounter>
  )
}
