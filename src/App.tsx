import AlternativeTitle from './components/AlternartiveTitle'
import { ComplexTitle } from './components/ComplexTitle'
import { Random } from './components/Random'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <ComplexTitle title="more complex title" />
      <AlternativeTitle title="alternative title" />
      {/* <Random /> */}
    </div>
  )
}

export default App
