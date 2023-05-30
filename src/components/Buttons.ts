import styled, { css } from 'styled-components'

type Props = {
  large?: boolean
}

export const DefaultButton = styled.button<Props>`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  /* padding: ${({ large }) => (large ? '2rem' : '0.25rem')}; */
  display: block;
  width: 200px;
  margin: 1rem auto;
  font-weight: 400;
  ${({ large }) =>
    large
      ? css`
          padding: 2rem;
        `
      : css`
          padding: 0.25rem;
        `};
`

export const HipsterButton = styled(DefaultButton)`
  width: 150px;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
  padding: 1rem;
  display: inline-block;
  margin-right: 1rem;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
`
