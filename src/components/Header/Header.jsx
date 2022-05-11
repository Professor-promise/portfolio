import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignment};

  h4 {
    font-size: 1.7rem;
    font-weight: 500;
    color: var(--greenBackground);
  }
  h5 {
    line-height: 1.5rem;
    font-size: ${(props) => props.fontSize || '2rem'};
    font-weight: 300;
    padding: 0.5rem 0;
    color: ${(props) => props.color || 'var(--darkBackground)'};
  }
  .line {
    width: 8rem;
    height: 0.25rem;
    margin: 0.5rem 0 2rem 0;
    border-radius: 7rem;
    background: ${(props) => props.color || 'var(--greenBackground)'};
  }

  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.alignment};

    h4 {
      font-size: 2rem;
      font-weight: 500;
      color: var(--greenBackground);
    }
    h5 {
      font-size: 2.5rem;
      font-weight: 300;
      padding: 0.5rem 0;
      color: ${(props) => props.color || 'var(--darkBackground)'};
    }
    .line {
      width: 8rem;
      height: 0.25rem;
      margin: 0.5rem 0 1.5rem 0;
      border-radius: 7rem;
      background: ${(props) => props.color || 'var(--greenBackground)'};
    }
  }
`;

const Header = ({ title, alignment, description, color, fontSize }) => {
  return (
    <Container alignment={alignment} color={color} fontSize={fontSize}>
      <h4>{title}</h4>
      <h5>{description}</h5>
      <div className='line'></div>
    </Container>
  );
};

export default Header;
