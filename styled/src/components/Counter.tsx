import React, { FC, useState } from "react"
import styled from "styled-components"

const StyledCounter = styled.div`
  display: inline-block;
  color: rgb(255, 255, 255);
  border: 2px solid rgb(219, 112, 147);
  border-radius: 7px;
`

const Paragraph = styled.p`
  display: inline-block;
  width: 4rem;
  font-size: 2.4rem;
  font-weight: 900;
  color: rgb(102, 51, 153);
  text-align: center;
`

// prettier-ignore
export const Button = styled("button")<{ disabled?: boolean }>`
  padding: 0.25em 1em;
  margin: 1em;
  font-size: 1em;
  font-weight: 900;
  color:
    ${props => 
      props.disabled ? "rgb(255, 255, 255);" : "rgb(255, 255, 255)"};
  text-decoration: none;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  background-color:
    ${props => 
      props.disabled ? "rgb(211, 211, 211);" :  "rgb(219, 112, 147)"};
  border:
    2px solid ${props => (
      props.disabled ? "rgb(211, 211, 211);" : "rgb(219, 112, 147)")};
  border-radius: 3px;
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
      <Button disabled={!hasPrev} onClick={decrement}>
        –
      </Button>
      <Paragraph>{count}</Paragraph>
      <Button disabled={!hasNext} onClick={increment}>
        +
      </Button>
    </StyledCounter>
  )
}
