import styled, { css } from 'styled-components'

const fruits = ['orange', 'apple', 'banana', 'peach']

type ItemProps = {
  odd: boolean
}

const Item = styled.li<ItemProps>`
  list-style-type: none;
  ${({ odd }) => {
    return odd
      ? css`
          color: white;
          background: red;
          font-size: 1.5rem;
          padding: 1.5rem;
        `
      : css`
          color: $222;
          padding: 1rem;
        `
  }}
`

export const List = () => {
  return (
    <ul>
      {fruits.map((item, index) => {
        return (
          <Item key={item} odd={(index + 1) % 2 !== 0}>
            {item}
          </Item>
        )
      })}
    </ul>
  )
}
