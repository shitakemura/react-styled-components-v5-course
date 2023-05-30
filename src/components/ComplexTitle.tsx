import styled from 'styled-components'

type Props = {
  title: string
}

export const ComplexTitle = ({ title }: Props) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  /* div {
    width: 10px;
    height: 10px;
    background: red;
  } */
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: #645cff;
    margin: 0 auto;
  }
`
