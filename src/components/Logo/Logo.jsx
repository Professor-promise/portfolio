import React from 'react';
import styled from 'styled-components';
import logo from '../../img/logo_8.png';

const Container = styled.div`
  display: flex;
  align-items: flex-start;

  a {
    text-decoration: none;
    color: var(--darkBackground);

    img {
      width: 60%;
      object-fit: contain;
      display: block;
      transform: scale(0.4);
    }
  }

  @media screen and (min-width: 768px) {
    a {
      img {
        width: 70%;
      }
    }
  }

  @media screen and (min-width: 992px) {
    a {
      img {
        width: 90%;
        transform: ${(props) => props.scale || 'scale(0.3)'};
      }
    }
  }
`;

const Logo = ({ scale }) => {
  return (
    <Container scale={scale}>
      <a href='#home'>
        <img src={logo} alt='' />
      </a>
    </Container>
  );
};

export default Logo;
