import styled from 'styled-components';
import hero from '../../img/hero_3.png';
import LinkContainer from '../LinkContainer/LinkContainer';
import { motion } from 'framer-motion';

const Container = styled.div`
  height: 150vh;
  background: var(--mainBackground);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  padding: var(--sectionPadding);
  position: relative;
  overflow: hidden;
  padding-top: 12rem;

  .home {
    width: 100%;
    z-index: 4;
    position: relative;
    h3 {
      font-size: 2.5rem;
      color: var(--greenBackground);
      font-weight: 400;
      line-height: 1;
    }
    h2 {
      font-size: 3rem;
      display: flex;
      flex-direction: column;
      font-weight: 600;
      text-transform: uppercase;
      span {
        margin-top: -1rem;
        text-transform: capitalize;
        font-weight: 500;
        font-size: 2.5rem;
      }
    }
    h4 {
      font-size: 1.1rem;
    }
  }

  .btn {
    background: var(--greenBackground);
    outline: 0;
    border: 0;
    margin-top: 1rem;
    border-radius: 0.6rem;
    color: var(--lightBackground);
    cursor: pointer;
    padding: 0.5rem;

    a {
      text-decoration: none;
      color: var(--mainBackground);
      font-size: 1.5rem;
    }

    &:hover {
      background: var(--lightGreenBackground);
    }
  }

  .hero {
    width: 100%;
    height: 40rem;
    z-index: 2;
    position: relative;
    display: flex;

    .image {
      width: 100%;
      position: absolute;
      height: 40rem;
      left: 0;
      top: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 20rem;
        height: 100%;
        display: inline-block;
        object-fit: contain;
        transform: scale(1.3);
      }
    }
  }

  .links__container {
    display: none;
  }

  @media screen and (min-width: 768px) {
    padding: var(--smallPadding);
    padding-top: 12rem;
    .home {
      flex: 0.7;
      h3 {
        font-size: 2.5rem;
      }
      h2 {
        font-size: 4.5rem;
        span {
          font-size: 3.5rem;
        }
      }
      h4 {
        font-size: 1.3rem;
        color: var(--lightGreyBackground);
      }

      .btn {
        background: var(--greenBackground);
        outline: 0;
        border: 0;
        margin-top: 1rem;
        border-radius: 0.6rem;
        color: var(--lightBackground);
        cursor: pointer;
        padding: 1rem;

        a {
          text-decoration: none;
          color: var(--mainBackground);
          font-size: 1.6rem;
        }

        &:hover {
          background: var(--lightGreenBackground);
        }
      }
    }
    .hero {
      width: 100%;
      height: 40rem;
      z-index: 2;
      position: relative;
      display: flex;

      .image {
        width: 100%;
        position: absolute;
        height: 40rem;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 20rem;
          height: 100%;
          display: inline-block;
          object-fit: contain;
          transform: scale(1.45);
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    height: 100vh;
    padding: var(--padding);
    padding-top: 8rem;
    flex-direction: row;
    .home {
      flex: 0.7;
      h3 {
        font-size: 2.5rem;
      }
      h2 {
        font-size: 4.5rem;
        span {
          font-size: 3.5rem;
        }
      }
      h4 {
        font-size: 1.3rem;
        color: var(--lightGreyBackground);
      }

      .btn {
        background: var(--greenBackground);
        outline: 0;
        border: 0;
        margin-top: 1rem;
        border-radius: 0.6rem;
        color: var(--lightBackground);
        cursor: pointer;
        padding: 1rem;

        a {
          text-decoration: none;
          color: var(--mainBackground);
          font-size: 1.6rem;
        }

        &:hover {
          background: var(--lightGreenBackground);
        }
      }
    }

    .links__container {
      display: block;
    }

    .hero {
      flex: 0.3;
      width: 50rem;
      height: 100vh;
      z-index: 2;
      position: relative;
      display: flex;

      .image {
        width: 40rem;
        height: 45rem;
        position: absolute;
        display: flex;
        align-items: baseline;
        left: -100%;
        right: 10rem;
        bottom: 0;
        top: 10rem;

        img {
          width: 100%;
          display: inline-block;
          object-fit: contain;
          transform: scale(1.3);
        }
      }
    }
    &:before {
      content: '';
      position: absolute;
      background: var(--greenBackground);
      width: 60rem;
      height: 100vh;
      top: 0;
      right: -12rem;
      transform: skew(20deg);
      z-index: 1;
    }
  }
`;

const Home = () => {
  const handleClick = (e) => {
    e.preventDefault();

    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  return (
    <Container id='home'>
      <motion.div
        initial={{ left: '-50%' }}
        whileInView={{ left: '0' }}
        transition={{ duration: 1 }}
        className='home'
      >
        <h3>Hello, I'm</h3>
        <h2>
          Umeh <span>Promise Chidubem</span>
        </h2>
        <h4>A Passionate Web Developer, Designer and Creative Thinker</h4>
        <motion.button
          whileHover={{ scale: 1.1 }}
          type='btn'
          className='btn'
          onClick={handleClick}
        >
          <a href='#contact'>Hire Me</a>
        </motion.button>
        <div className='links__container'>
          <LinkContainer />
        </div>
      </motion.div>
      <motion.div
        initial={{ x: '100%' }}
        whileInView={{ x: '0' }}
        transition={{ duration: 1 }}
        className='hero'
      >
        <div className='image'>
          <img src={hero} alt='' />
        </div>
      </motion.div>
    </Container>
  );
};

export default Home;
