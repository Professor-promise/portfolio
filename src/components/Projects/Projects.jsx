import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { MdVisibility } from 'react-icons/md';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1rem;
  border: 0.125rem solid var(--mainBackground);
  padding: 0 1rem;
  border-radius: 1rem;
  overflow: hidden;

  .projects__container {
    height: 100%;
    width: 100%;
    /* background: var(--mainBackground); */
    overflow: hidden;

    .image {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }

  .projects__description {
    padding: 0 0.5rem;
    h3 {
      font-weight: 600;
      font-size: 1.2rem;
      margin-top: 0.5rem;
      /* letter-spacing: 0.1rem; */
    }
    p {
      font-size: 1rem;
      color: var(--lightGreyBackground);
    }
  }

  .btn__containers {
    visibility: hidden;
    transition: var(--transition);

    .icons {
      display: none;
      transition: var(--transition) !important;
    }
  }
  &:hover {
    .btn__containers {
      position: absolute;
      left: 0;
      height: 100%;
      width: 100%;
      background: var(--overlayBackground);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      visibility: visible;

      .icons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        svg {
          color: var(--lightBackground);
          font-size: 3rem;
        }
      }
    }
  }

  @media screen and (min-width: 760px) {
    height: 100%;
    width: 100%;
    .projects__container {
      height: 25rem;
      width: 30rem;

      .image {
        width: 100%;
        object-fit: cover;
        height: 100%;
      }
    }

    .projects__description {
      padding: 0 0.5rem;
      h3 {
        font-weight: 600;
        font-size: 1.3rem;
        margin-top: 0.5rem;
        /* letter-spacing: 0.1rem; */
      }
      p {
        font-size: 1.1rem;
        color: var(--lightGreyBackground);
      }
    }

    .btn__containers {
      visibility: hidden;
      transition: var(--transition);

      .icons {
        display: none;
        transition: var(--transition) !important;
      }
    }
    &:hover {
      .btn__containers {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background: var(--overlayBackground);
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        visibility: visible;
        visibility: visible;

        .icons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          svg {
            color: var(--lightBackground);
            font-size: 4rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 992px) {
    /* padding: var(--padding); */
    width: 100%;
    height: 100%;
    .projects__container {
      height: 22rem;
      width: 38rem;
      /* background: var(--mainBackground); */
      overflow: hidden;

      .image {
        width: 100%;
        object-fit: cover;
        height: 100%;
      }
    }

    .projects__description {
      padding: 0 1rem;
      h3 {
        font-weight: 600;
        font-size: 1.4rem;
        margin-top: 1rem;
        letter-spacing: 0.1rem;
      }
      p {
        font-size: 1.1rem;
        color: var(--lightGreyBackground);
      }
    }

    .btn__containers {
      visibility: hidden;
      transition: var(--transition);

      .icons {
        display: none;
        transition: var(--transition) !important;
      }
    }
    &:hover {
      .btn__containers {
        position: absolute;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 2rem;
        background: var(--overlayBackground);
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        visibility: visible;
        visibility: visible;

        .icons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          svg {
            color: var(--lightBackground);
            font-size: 5rem;
          }
        }
      }
    }
  }
`;

const Projects = ({ img, desc, title, web_link, github_link }) => {
  return (
    <Container>
      <div className='projects__container'>
        <img src={img} alt='' className='image' />
      </div>
      <div className='projects__description'>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className='btn__containers'>
        <div className='icons'>
          <a href={web_link} target='_blank' rel='noreferrer'>
            <MdVisibility />
          </a>
          <a href={github_link} target='_blank' rel='noreferrer'>
            <FaGithub />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
