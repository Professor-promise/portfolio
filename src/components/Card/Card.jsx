import styled from 'styled-components';

const Container = styled.div`
  width: 20rem;
  height: 14rem;
  background: var(--mainBackground);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  box-shadow: var(--boxShadow);
  transition: var(--transition);

  .icon__container {
    width: 3rem;
    height: 3rem;
    background: var(--greenBackground);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem 1rem 0 1rem;
    margin-bottom: 0.5rem;

    svg {
      color: var(--lightBackground);
      font-size: 2rem;
    }
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
  }
  p {
    font-size: 0.9rem;
  }

  &:hover {
    background: var(--greenBackground);
    cursor: pointer;
    transform: scale(1.1);

    .icon__container {
      background: var(--lightBackground);

      svg {
        color: var(--greenBackground);
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 25rem;
    height: 16rem;

    .icon__container {
      width: 4rem;
      height: 4rem;
      svg {
        font-size: 3rem;
      }
    }
    h3 {
      font-size: 1.3rem;
    }
    p {
      font-size: 1.1rem;
    }
  }

  @media screen and (min-width: 992px) {
    width: 30rem;
    height: 18rem;

    .icon__container {
      width: 4rem;
      height: 4rem;
      svg {
        font-size: 3rem;
      }
    }
    h3 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1.15rem;
    }
  }
`;

const Card = ({ title, desc, icon }) => {
  return (
    <Container>
      <div className='icon__container'>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </Container>
  );
};

export default Card;
