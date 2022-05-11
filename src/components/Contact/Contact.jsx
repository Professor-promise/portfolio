import styled from 'styled-components';
import Header from '../Header/Header';
import pattern from '../../img/pattern_2.png';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Container = styled.div`
  height: 80vh;
  padding: var(--sectionPadding);
  background: var(--lightBackground);
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 100%;
    background: var(--greenBackground);
    border-radius: 0.8rem;
    padding: 0.5rem 2rem;
    height: 55vh;

    form {
      margin-top: 1rem;
      display: flex;
      gap: 2rem;
      height: 14rem;

      .message {
        flex: 0.6;
        width: 100%;
        height: 100%;
        outline: 0;
        border: 0;
        border-radius: 0.4rem;
        font-size: 1.3rem;
        padding: 1rem;
        resize: none;
      }

      .msg__body {
        flex: 0.4;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        gap: 1.5rem;

        input {
          height: 3rem;
          padding: 1rem;
          outline: 0;
          border: 0;
          border-radius: 0.4rem;
          width: 100%;
          height: 100%;
          font-size: 1.2rem;
        }

        .btn {
          font-size: 1.3rem;
          outline: 0;
          border: 0;
          padding: 0.7rem 2rem;
          border-radius: 0.4rem;
          background: var(--mainBackground);
          color: var(--greenBackground);
          cursor: pointer;
          height: 100%;
        }
      }
    }
  }

  @media screen and (min-width: 992px) {
    height: 80vh;
    padding: var(--padding);
    background: var(--lightBackground);
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      width: 90%;
      background: var(--greenBackground);
      border-radius: 0.8rem;
      padding: 1rem 4rem;
      height: 70vh;

      form {
        margin-top: 2rem;
        display: flex;
        gap: 2rem;
        height: 16rem;

        .message {
          flex: 0.6;
          width: 100%;
          height: 100%;
          outline: 0;
          border: 0;
          border-radius: 0.4rem;
          font-size: 1.8rem;
          padding: 1rem;
          resize: none;
        }

        .msg__body {
          flex: 0.4;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
          gap: 1.5rem;

          input {
            height: 3rem;
            padding: 1rem;
            outline: 0;
            border: 0;
            border-radius: 0.4rem;
            width: 100%;
            height: 100%;
            font-size: 1.4rem;
          }

          .btn {
            font-size: 1.8rem;
            outline: 0;
            border: 0;
            padding: 0.7rem 2rem;
            border-radius: 0.4rem;
            background: var(--mainBackground);
            color: var(--greenBackground);
            cursor: pointer;
            height: 100%;
          }
        }
      }
    }
  }
`;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_gllxbcq',
        'template_0ru6biw',
        form.current,
        'cFJb95oPG9dqNp3r8'
      )
      .then(
        (result) => {
          setMessage('');
          setName('');
          setEmail('');
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <Container
      style={{ backgroundImage: `url(${pattern})` }}
      id='contact'
      as={motion.div}
      initial={{ y: '-300px' }}
      whileInView={{ y: '0' }}
      transition={{ duration: 1 }}
    >
      <div className='content'>
        <Header
          description='Have Any Project in Mind?'
          color='var(--mainBackground)'
        />
        <form onSubmit={sendEmail} ref={form}>
          <textarea
            placeholder='Message Me...'
            className='message'
            name='message'
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className='msg__body'>
            <input
              type='text'
              placeholder='Your Name...'
              className='name'
              name='user_name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type='email'
              placeholder='Your Email'
              className='email'
              name='user_email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className='btn'>Message</button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
