import React, { FC } from "react"
import styled from "styled-components"

const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em"
}))`
  padding: ${props => props.size};
  margin: ${props => props.size};
  font-size: 1em;
  color: rgb(128, 128, 128);
  border: 2px solid rgb(219, 112, 147);
  border-radius: 3px;
`

const PasswordInput = styled(Input).attrs({
  type: "password"
})`
  border: 2px solid rgb(102, 51, 153);
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
