import styled from 'styled-components';
import Card from '../Card/Card';
import Header from '../Header/Header';
import { FaLaptopCode } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { HiCode, HiUserAdd } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Container = styled.div`
  background: var(--mainBackground);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: var(--sectionPadding);
  gap: 1rem;

  .content {
    text-align: center;
  }

  .card__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  @media screen and (min-width: 768) {
    padding: var(--smallpadding);
    gap: 1rem;

    .content {
      text-align: center;
    }
    .card__container {
      gap: 1rem;
    }
  }

  @media screen and (min-width: 992px) {
    padding: var(--padding);
    gap: 1.4rem;

    .content {
      text-align: center;
    }

    .card__container {
      gap: 2rem;
    }
  }
`;

const Services = () => {
  return (
    <Container
      id='services'
      as={motion.div}
      initial={{ y: '-300px', opacity: 0 }}
      whileInView={{ y: '0', opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='content'>
        <Header
          title='Services'
          alignment='center'
          description='Services I Provide'
        />
      </div>
      <div className='card__container'>
        <div>
          <Card
            icon={<HiUserAdd />}
            title='UI/UX Design'
            desc='I create best UI/UX designs. user experience and user interface are the key feature of my development.'
          />
        </div>
        <div>
          <Card
            icon={<CgWebsite />}
            title='Web Design'
            desc='Create professional looking website for your company or business and sell your products and services online'
          />
        </div>
        <div>
          <Card
            icon={<FaLaptopCode />}
            title='Graphic Design'
            desc='Create professional logo and graphics designs for your brand and company like poster, flyers etc.'
          />
        </div>
        <div>
          <Card
            icon={<HiCode />}
            title='Web Development'
            desc='Create web application with admin panel and all the latest features and costumer support.'
          />
        </div>
      </div>
    </Container>
  );
};

export default Services;
