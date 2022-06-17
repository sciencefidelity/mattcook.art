import React, { FC } from "react"
import styled from "styled-components"

const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em"
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  margin: ${props => props.size};
  padding: ${props => props.size};
`

export const TextInputs: FC = () => {
  return (
    <div>
      <Input placeholder="A small text input" />
      <br />
      <Input placeholder="A bigger text input" size="2em" />
    </div>
  )
}
