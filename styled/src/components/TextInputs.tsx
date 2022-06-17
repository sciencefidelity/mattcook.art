import React, { FC } from "react"
import styled from "styled-components"

const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em"
}))`
  color: grey;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  margin: ${props => props.size};
  padding: ${props => props.size};
`

const PasswordInput = styled(Input).attrs({
  type: "password"
})`
  border: 2px solid rebeccapurple;
`

export const TextInputs: FC = () => {
  return (
    <div>
      <Input placeholder="A small text input" size="2em" />
      <br />
      <PasswordInput placeholder="A bigger text input" size="2em" />
    </div>
  )
}
