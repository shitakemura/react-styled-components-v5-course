import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
// import AlternativeTitle from './components/AlternartiveTitle'
// import { ComplexTitle } from './components/ComplexTitle'
// import { Random } from './components/Random'
// import { Card } from './components/Card'
// import { Loading } from './components/Loading'
import { DefaultButton, HipsterButton } from './components/Buttons'
import { Form } from './components/Form'
import { List } from './components/List'
import { Products } from './components/Products'
import GlobalStyles from './global-styles'

const BaseTheme = {
  color: '#222',
  background: '#fff',
} as const

const DarkTheme = {
  color: '#fff',
  background: '#222',
} as const

type Theme = typeof BaseTheme | typeof DarkTheme

const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`

function App() {
  const [theme, setTheme] = useState<Theme>(DarkTheme)

  const handleClick = () =>
    setTheme((prev) => (prev === BaseTheme ? DarkTheme : BaseTheme))

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Container>
        <h1>hello world</h1>
        <button className="btn" onClick={handleClick}>
          toggle me
        </button>
      </Container> */}
      {/* <ComplexTitle title="more complex title" /> */}
      {/* <AlternativeTitle title="alternative title" /> */}
      {/* <Random /> */}
      {/* <Card /> */}
      {/* <div style={{ padding: '2rem' }}>
        <Loading />
        <HipsterButton>click me</HipsterButton>
        <HipsterButton as="a" href="https://www.johnsmilga.com/">
          click me
        </HipsterButton>
        <HipsterButton>click me</HipsterButton>
      </div> */}
      {/* <div>
        <DefaultButton>click me</DefaultButton>
        <DefaultButton large>click me</DefaultButton>
      </div> */}
      <div style={{ padding: '2rem' }}>
        {/* <Form /> */}
        <List />
        <Products />
      </div>
    </ThemeProvider>
  )
}

export default App
