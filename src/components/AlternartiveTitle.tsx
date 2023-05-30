import styled from 'styled-components'

type Props = {
  title: string
  className?: string
}

const AlternativeTitle = ({ title, className }: Props) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="underline"></div>
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
    background: #645cff;
    margin: 0 auto;
  }
`

export default Wrapper
