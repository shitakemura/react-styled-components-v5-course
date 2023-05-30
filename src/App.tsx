// import AlternativeTitle from './components/AlternartiveTitle'
// import { ComplexTitle } from './components/ComplexTitle'
// import { Random } from './components/Random'
import { Card } from './components/Card'
import GlobalStyles from './global-styles'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <GlobalStyles />
      {/* <ComplexTitle title="more complex title" /> */}
      {/* <AlternativeTitle title="alternative title" /> */}
      {/* <Random /> */}
      <Card />
    </div>
  )
}

export default App
