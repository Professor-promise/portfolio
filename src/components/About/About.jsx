import React from 'react';
import styled from 'styled-components';
import hero from '../../img/about_hero_1.png';
import Header from '../Header/Header';
import ProgressBar from '../ProgressBar/ProgressBar';
import { motion } from 'framer-motion';

const Container = styled.div`
  background: var(--lightBackground);
  padding: var(--sectionPadding);
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .image__container {
    display: none;
    .image {
      height: 100%;
      height: 25rem;
      width: 20rem;
      display: flex;
      align-items: center;
      justify-content: center;

      .img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
        object-position: -2rem -2rem;
      }
    }
  }

  .content {
    width: 100%;

    p {
      color: var(--lightGreyBackground);
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    padding: var(--smallPadding);
    .image__container {
      display: none;
      .image {
        height: 100%;
        height: 25rem;
        width: 20rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 50%;
          object-position: -2rem -2rem;
          transform: scale(1.3);
        }
      }
    }

    .content {
      width: 100%;
      margin-top: 6rem;

      p {
        color: var(--lightGreyBackground);
        font-size: 1.3rem;
      }
    }
  }

  @media screen and (min-width: 992px) {
    height: 100vh;
    flex-direction: row;
    padding: var(--padding);

    .image__container {
      flex: 0.4;
      display: flex;

      .image {
        height: 40rem;
        width: 40rem;
        margin-left: -5rem;

        .img {
          height: 100%;
          width: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: -2rem -3.5rem;
          transform: scale(0.95);
        }
      }
    }

    .content {
      flex: 0.55;
      width: 10rem;

      p {
        color: var(--lightGreyBackground);
        font-size: 1.1rem;
      }
    }
  }
`;

const About = () => {
  return (
    <Container
      as={motion.div}
      initial={{ x: '-300px', opacity: 0 }}
      whileInView={{ x: '0px', opacity: 1 }}
      transition={{ duration: 1 }}
      id='about'
    >
      <div className='image__container'>
        <div className='image'>
          <img src={hero} alt='' className='img' />
        </div>
      </div>
      <div className='content'>
        <Header
          title='About Me'
          alignment='flex-start'
          description='Why You Hire Me?'
        />
        <p>
          Skilled and motivated front-end developer. I am courteous and
          enthusiastic. I am interested in IT and everything in its orbit. I
          recently began to be fascinated by web programming e.g. developing
          apps and building websites. I am currently looking for a job or an
          internship as a frontend developer.
        </p>
        <div className='progress__bar'>
          <div>
            <ProgressBar value={80} title={'UI/UX Design'} />
          </div>
          <div>
            <ProgressBar value={85} title='Web Design' />
          </div>
          <div>
            <ProgressBar value={90} title='HTML/CSS' />
          </div>
          <div>
            <ProgressBar value={75} title='Photo Manipulation' />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
