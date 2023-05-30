import styled from 'styled-components'

type Props = {
  title: string
}

export const ComplexTitle = ({ title }: Props) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
      <div className="box"></div>
      <h2 className="title">random</h2>
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
    background: var(--primary);
    margin: 0 auto;
  }
  .title {
    color: blue;
  }
  .box {
    height: 10px;
    border: var(--mainBorder);
  }
`
