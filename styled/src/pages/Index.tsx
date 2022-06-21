import React, { FC, ReactNode } from "react"
import styled, { ThemeProvider } from "styled-components"
// import { Animate } from "../components/Animate"
import { Counter } from "../components/Counter"
// import { TextInputs } from "../components/TextInputs"

interface LinkProps {
  children: ReactNode
  className?: string
}

interface ReversedButtonProps {
  children: string
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const Button = styled("button")<{primary?: boolean}>`
  background-color: white;
  color: ${props => props.theme.main};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme.main};
  border-radius: 3px;
  text-decoration: none;
`

const TomatoButton = styled(Button)`
  background-color: tomato;
  border-color: tomato;
  color: white;
`

const ReversedButton: FC<ReversedButtonProps> = (props) => {
  const reversed = props?.children?.split("").reverse().join("")
  return (
    <Button {...props}>{reversed}</Button>
  )
}

const Link: FC<LinkProps> = ({ className, children }) => (
  <Button as="a" href="#" className={className}>{children}</Button>
)

const Input = styled("input")<{inputColor?: string}>`
  padding: 0.5em;
  margin: 0.5em;
  background-color: papayawhip;
  color: ${props => props.inputColor || "palevioletred"};
  border: none;
  border-radius: 3px;
`

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`

Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

const theme = {
  main: "palevioletred"
}

const Index: FC = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Title>
            Hello World!
          </Title>
        </Wrapper>
        <Button>Normal</Button>
        <Button theme={{ main: "mediumseagreen" }}>Normal</Button>
        <TomatoButton as="a" href="#">Tomato</TomatoButton>
        <Button as={ReversedButton}>Primary</Button>
        <Button theme={{ main: "royalblue" }}>Themed</Button>
        <StyledLink>Linked</StyledLink>
        <Input
          defaultValue="@sciencefidelity"
          type="text"
          inputColor="rebeccapurple"
        />
        <Counter />
      </ThemeProvider>
      {/* <TextInputs /> */}
      {/* <Animate /> */}
    </main>
  )
}
export default Index
