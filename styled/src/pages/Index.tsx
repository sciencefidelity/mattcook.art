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
  color: rgb(219, 112, 147);
  text-align: center;
`

const Wrapper = styled.section`
  padding: 4em;
  background: rgb(255, 239, 213);
`

const Button = styled("button")<{ primary?: boolean }>`
  padding: 0.25em 1em;
  margin: 1em;
  font-size: 1em;
  color: ${props => props.theme.main};
  text-decoration: none;
  background-color: rgb(255, 255, 255);
  border: 2px solid ${props => props.theme.main};
  border-radius: 3px;
`

const TomatoButton = styled(Button)`
  color: rgb(255, 255, 255);
  background-color: rgb(255, 99, 71);
  border-color: rgb(255, 99, 71);
`

const ReversedButton: FC<ReversedButtonProps> = props => {
  const reversed = props?.children?.split("").reverse().join("")
  return <Button {...props}>{reversed}</Button>
}

const Link: FC<LinkProps> = ({ className, children }) => (
  <Button as="a" href="#" className={className}>
    {children}
  </Button>
)

const Input = styled("input")<{ inputColor?: string }>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "rgb(219, 112, 147)"};
  background-color: rgb(255, 239, 213);
  border: 0;
  border-radius: 3px;
`

const StyledLink = styled(Link)`
  font-weight: bold;
  color: rgb(219, 112, 147);
`

Button.defaultProps = {
  theme: {
    main: "rgb(219, 112, 147)"
  }
}

const theme = {
  main: "rgb(219, 112, 147)"
}

const Index: FC = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Title>Hello World!</Title>
        </Wrapper>
        <Button>Normal</Button>
        <Button theme={{ main: "mediumseagreen" }}>Normal</Button>
        <TomatoButton as="a" href="#">
          Tomato
        </TomatoButton>
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
