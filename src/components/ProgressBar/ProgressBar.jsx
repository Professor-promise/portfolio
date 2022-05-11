import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 1.5rem;

  .name {
    display: flex;
    justify-content: space-between;
    width: 94%;
    color: var(--lightGreyBackground);
    span:first-child {
      font-size: 1.2rem;
    }
    span:last-child {
      font-size: 1.2rem;
    }
  }

  progress[value] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
  }

  progress[value]::-webkit-progress-bar {
    height: 0.8rem;
    background: var(--lightGreyBackground);
    background: #bf546845;
    border-radius: 7rem;
  }

  progress[value]::-webkit-progress-value {
    height: 0.8rem;
    background: var(--greenBackground);
    border-radius: 0.7rem;
  }
`;

const ProgressBar = ({ value, title }) => {
  return (
    <Container>
      <div className='name'>
        <span>{title}</span>
        <span>{value}%</span>
      </div>
      <progress value={value} max='100' />
    </Container>
  );
};

export default ProgressBar;
