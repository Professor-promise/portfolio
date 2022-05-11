import styled from 'styled-components';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import frontend_landing from '../../img/bootstrap_landing_page.PNG';
import phone_store from '../../img/dubem_phonestore.PNG';
import react_notes from '../../img/dubem_react_note.PNG';
import dubem_furniture_page from '../../img/dubem_furniture_page.PNG';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const Container = styled.div`
  padding: var(--sectionPadding);
  background: var(--lightBackground);

  .projects {
    width: 100%;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    .swiper {
      width: 100%;
      cursor: pointer;
    }
    .swiper-slide {
      margin-right: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .swiper-slide img {
      padding: 1rem;
      display: inline-block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .swiper-pagination-bullet-active {
      background: var(--greenBackground);
    }
  }

  @media screen and (min-width: 768px) {
    padding: var(--smallPadding);
    .projects {
      width: 100%;
      display: flex;
      gap: 2rem;
      flex-direction: column;
      .swiper {
        width: 100%;
        cursor: pointer;
      }
      .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .swiper-slide img {
        padding: 1rem;
        display: inline-block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .swiper-pagination-bullet-active {
        background: var(--greenBackground);
      }
    }
  }
  @media screen and (min-width: 992px) {
    height: 100vh;
    padding: var(--padding);

    .content {
      margin: 1rem 0;
    }

    .projects {
      width: 100%;
      display: flex;
      flex-direction: column;
      .swiper {
        width: 100%;
        cursor: pointer;
      }
      .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .swiper-slide img {
        padding: 1rem;
        display: inline-block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .swiper-pagination-bullet-active {
        background: var(--greenBackground);
      }
    }
  }
`;

const Portfolio = () => {
  return (
    <Container
      id='portfolio'
      as={motion.div}
      initial={{ x: '400px' }}
      whileInView={{ x: '0' }}
      transition={{ duration: 1 }}
    >
      <div className='content'>
        <Header title='Portfolio' description='Latest Projects' />
      </div>
      <div className='projects'>
        <Swiper
          slidesPerView={2}
          className='mySwiper'
          modules={[Pagination]}
          pagination={{ clickable: 'true' }}
          rewind={true}
        >
          <SwiperSlide>
            <Projects
              img={react_notes}
              title='Note Taking App'
              desc='Web Development'
              web_link='https://dubem-notesapp.netlify.app/'
              github_link='https://github.com/Professor-promise/Notes'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Projects
              img={phone_store}
              title='Creative Phone Store App'
              desc='Web Development'
              web_link='https://phonesstore.netlify.app/'
              github_link='https://github.com/Professor-promise/phonestore'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Projects
              img={frontend_landing}
              title='HTML/CSS'
              desc='Frontend Development'
              web_link='https://bfrontend.netlify.app/'
              github_link='https://github.com/Professor-promise/Frontend'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Projects
              img={dubem_furniture_page}
              title='HTML/CSS & JS'
              desc='Web Development'
              web_link='https://dubem-furniture.netlify.app/'
              github_link='https://github.com/Professor-promise/furniture-store'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default Portfolio;
