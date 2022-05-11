import styled from 'styled-components';
import Header from '../Header/Header';
import WorkContainer from '../WorkContainer/WorkContainer';
import { motion } from 'framer-motion';

const Container = styled.div`
  padding: var(--sectionPadding);
  background: var(--mainBackground);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 155vh;

  .exp__container {
    display: flex;
    flex-direction: column;
    gap: 7rem;

    &:before {
      content: '';
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    padding: var(--smallPadding);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 150vh;
    margin-bottom: 2rem;

    .exp__container {
      display: flex;
      flex-direction: column;
      gap: 4rem;

      &:before {
        content: '';
        display: none;
      }
    }
  }

  @media screen and (min-width: 992px) {
    padding: var(--padding);
    height: 130vh;

    .exp__container {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      &:before {
        content: '';
        width: 0.145rem;
        height: 42rem;
        background: var(--greenBackground);
        position: absolute;
        z-index: 1;
        left: 50%;
        display: block;
      }
    }
  }
`;

const Experience = () => {
  return (
    <Container
      id='experience'
      as={motion.div}
      initial={{ y: '400px' }}
      whileInView={{ y: '0' }}
      transition={{ duration: 1 }}
    >
      <div className='content'>
        <Header
          title='Experience'
          description='Work Experience'
          alignment='center'
        />
      </div>
      <div className='exp__container'>
        <WorkContainer
          desc_1='Designed both fliers, flex and handbills.'
          desc_2='Typing of projects and others.'
          count='01'
          title='Graphic Designer'
          work_desc='Dechosen Computers'
          exp='February, 2017 - November, 2018'
          alignment='left'
        />
        <WorkContainer
          desc_1='Developed new features and applications using React/Redux.'
          desc_2='Optimized components for maximum performance across a vast array of
          devices and browsers.'
          desc_3=' Development of custom workflows, web parts, content types, event
          handlers, and timer job definition.'
          count='02'
          title='Frontend Developer'
          work_desc='Pluralsight Internship in Collaboration with 
          Andela Company (#Buildforsdg)'
          exp='April, 2019 - December, 2019'
          reverse='row-reverse'
          alignment='right'
          left='4rem'
        />
      </div>
    </Container>
  );
};

export default Experience;
