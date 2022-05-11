import styled from 'styled-components';

const Container = styled.div`
  height: 18rem;
  display: flex;
  margin-right: 2rem;
  gap: 2rem;
  position: relative;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column-reverse;
  margin-left: 0.5rem;

  .desc {
    border-radius: 0.7rem;
    background: var(--mainBackground);
    box-shadow: var(--boxShadow);
    height: 15rem;
    width: 18rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* gap: 0.5rem; */
    margin-left: 1rem;

    p {
      font-size: 0.9rem;
      margin-top: 0.5rem;
      color: var(--lightGreyBackground);
    }
  }

  .circle {
    display: none;
  }

  .circle,
  .desc {
    transition: var(--transition);
  }

  .work__title {
    flex: 0.45;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.1rem;
    text-align: left;

    h3 {
      font-size: 1.5rem;
    }
    h4 {
      color: var(--greenBackground);
      font-size: 1rem;
      font-weight: 500;
    }
    p {
      margin-top: 0.4rem;
      font-size: 1rem;
      color: var(--lightGreyBackground);
      font-weight: 400;
    }
  }

  &:hover {
    .desc,
    .circle {
      background: var(--greenBackground);
    }
    .desc {
      p {
        color: var(--mainBackground);
      }
    }
    .circle {
      span {
        color: var(--mainBackground);
      }
    }
  }

  @media screen and (min-width: 768px) {
    height: 25rem;
    display: flex;
    margin-right: 2rem;
    gap: 2rem;
    position: relative;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column-reverse;

    .desc {
      border-radius: 0.7rem;
      background: var(--mainBackground);
      box-shadow: var(--boxShadow);
      height: 25rem;
      width: 35rem;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.5rem;
      margin-left: 2rem;

      p {
        font-size: 1.2rem;
        margin-top: 0.5rem;
        color: var(--lightGreyBackground);
      }
    }

    .circle {
      display: none;
    }

    .circle,
    .desc {
      transition: var(--transition);
    }

    .work__title {
      flex: 0.45;
      height: 20rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.1rem;
      text-align: left;

      h3 {
        font-size: 2rem;
      }
      h4 {
        color: var(--greenBackground);
        font-size: 1.3rem;
        font-weight: 500;
      }
      p {
        margin-top: 0.4rem;
        font-size: 1.1rem;
        color: var(--lightGreyBackground);
        font-weight: 400;
      }
    }

    &:hover {
      .desc,
      .circle {
        background: var(--greenBackground);
      }
      .desc {
        p {
          color: var(--mainBackground);
        }
      }
      .circle {
        span {
          color: var(--mainBackground);
        }
      }
    }
  }

  @media screen and (min-width: 992px) {
    height: 20rem;
    display: flex;
    margin-left: ${(props) => props.left};
    gap: 2rem;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-direction: ${(props) => props.reverse};

    .desc,
    .work__title {
      width: 37rem;
      padding: 1rem;
    }

    .desc {
      flex: 0.45;
      border-radius: 1rem;
      background: var(--mainBackground);
      box-shadow: var(--boxShadow);
      height: 20rem;
      width: 40rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.5rem;

      p {
        font-size: 1.1rem;
        margin-top: 1rem;
        color: var(--lightGreyBackground);
      }
    }

    .circle {
      display: block;
      padding: 1rem;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      border: 0.135rem solid var(--greenBackground);
      background: var(--mainBackground);
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--greenBackground);
      }
    }

    .circle,
    .desc {
      transition: var(--transition);
    }

    .work__title {
      flex: 0.45;
      height: 20rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 20rem;
      width: 40rem;
      gap: 0.1rem;
      text-align: ${(props) => props.alignment};

      h3 {
        font-size: 1.8rem;
      }
      h4 {
        color: var(--greenBackground);
        font-size: 1.1rem;
        font-weight: 500;
      }
      p {
        margin-top: 0.4rem;
        font-size: 1.2rem;
        color: var(--lightGreyBackground);
        font-weight: 400;
      }
    }

    &:hover {
      .desc,
      .circle {
        background: var(--greenBackground);
      }
      .desc {
        p {
          color: var(--mainBackground);
        }
      }
      .circle {
        span {
          color: var(--mainBackground);
        }
      }
    }
  }
`;

const WorkContainer = ({
  title,
  desc_1,
  desc_2,
  desc_3,
  count,
  work_desc,
  exp,
  reverse,
  alignment,
  left,
}) => {
  return (
    <Container reverse={reverse} alignment={alignment} left={left}>
      <div className='desc'>
        <p>{desc_1}</p>
        <p>{desc_2}</p>
        <p>{desc_3}</p>
      </div>
      <div className='circle'>
        <span>{count}</span>
      </div>
      <div className='work__title'>
        <h3>{title}</h3>
        <h4>{work_desc}</h4>
        <p>{exp} </p>
      </div>
    </Container>
  );
};

export default WorkContainer;
