import styled from 'styled-components'

export type Product = { id: number; name: string; price: number }

type Props = Product

type WrapperProps = {
  price: number
}

const Wrapper = styled.article<WrapperProps>`
  width: 300px;
  background: #fff;
  padding: 1rem;
  border-radius: 0.25rem;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    text-transform: capitalize;
  }
  p {
    color: ${({ price }) => {
      if (price < 100) return 'green'
      if (price > 500) return 'red'
      return '#222'
    }};
  }
`

export const ProductItem = ({ name, price }: Props) => {
  return (
    <Wrapper price={price}>
      <h4>{name}</h4>
      <p>${price}</p>
    </Wrapper>
  )
}
