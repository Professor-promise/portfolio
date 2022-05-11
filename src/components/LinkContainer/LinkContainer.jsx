import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Container = styled.div`
  position: ${(props) => props.position || 'absolute'};
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap || '2.3rem'};
  top: ${(props) => props.top || '1rem'};
  left: ${(props) => props.left || '-5rem'};
  cursor: pointer;
  border: ${(props) =>
    props.border || '0.145rem solid var(--lightGreyBackground)'};
  padding: 1rem;
  border-radius: 7rem;

  svg {
    font-size: ${(props) => props.fontSize || '1.6rem'};
    color: var(--greenBackground);

    &:hover {
      color: var(--lightGreenBackground);
    }
  }
`;

const LinkContainer = ({
  direction,
  position,
  top,
  border,
  left,
  fontSize,
  gap,
}) => {
  return (
    <Container
      direction={direction}
      position={position}
      top={top}
      border={border}
      left={left}
      fontSize={fontSize}
      gap={gap}
    >
      <a
        href='https://web.facebook.com/Professorpromise/'
        target='_blank'
        rel='noreferrer'
      >
        <FaFacebook />
      </a>
      <a href='https://twitter.com/dev_dubem' target='_blank' rel='noreferrer'>
        <FaTwitter />
      </a>
      <a
        href='https://www.instagram.com/professorpromise1000/?hl=en'
        target='_blank'
        rel='noreferrer'
      >
        <FaInstagram />
      </a>
      <a
        href='https://www.linkedin.com/in/promise-chidubem-umeh-842992143/'
        target='_blank'
        rel='noreferrer'
      >
        <FaLinkedin />
      </a>
    </Container>
  );
};

export default LinkContainer;
