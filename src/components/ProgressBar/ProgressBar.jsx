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
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    border-radius: 0.7rem;
    background: #bf546845;
    height: 1rem;
  }

  progress[value]::-webkit-progress-bar {
    border-radius: 7rem;
    background: #bf546845;
  }

  progress[value]::-webkit-progress-value {
    background: var(--greenBackground);
    border-radius: 0.7rem;
  }

  progress[value]::-moz-progress-bar {
    border-radius: 7rem;
    background: var(--greenBackground);
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
