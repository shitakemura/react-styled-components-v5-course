import styled from 'styled-components'

export const Card = () => {
  return (
    <StyledCard>
      <img
        src="https://www.course-api.com/images/store/product-1.jpeg"
        alt="product"
      />
      <footer>
        <h4>product name</h4>
        <p>$15</p>
      </footer>
    </StyledCard>
  )
}

const StyledCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background: var(--white);
  border-radius: 0.25rem;

  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    h4 {
      text-transform: capitalize;
    }
    p {
      color: var(--primary);
      font-weight: 700;
    }
  }
`
