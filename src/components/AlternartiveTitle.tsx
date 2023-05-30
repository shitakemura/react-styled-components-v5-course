import styled from 'styled-components'
import { colors, setupBoarder } from '../utils'

type Props = {
  title: string
  className?: string
}

const AlternativeTitle = ({ title, className }: Props) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="underline"></div>
      <div className="box"></div>
    </div>
  )
}

const Wrapper = styled(AlternativeTitle)`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: ${colors.primary};
    margin: 0 auto;
  }
  .box {
    height: 10px;
    border: ${setupBoarder({ width: 5, color: 'green' })};
  }
`

export default Wrapper
