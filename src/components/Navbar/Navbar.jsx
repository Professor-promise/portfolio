import styled from 'styled-components';
import Logo from '../Logo/Logo';
import { useState } from 'react';
import { links } from './data';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Container = styled.nav`
  .navbar {
    justify-content: space-between;
    align-items: center;
    padding: var(--sectionPadding);
    height: 4rem;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    background: var(--mainBackground);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    max-width: 100vw;

    .logo {
      margin-left: -3rem;
    }
    .navlinks__container {
      .links {
        list-style: none;
        position: absolute;
        left: 0rem;
        top: 5rem;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        background: var(--lightBackground);
        padding: 1rem 2rem;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        width: 100%;
        display: none;

        a {
          display: flex;
          flex-direction: column;
          gap: 2em;
          text-decoration: none;
          color: var(--darkBackground);
          font-size: 1.4rem;
        }
        &.show__link {
          display: flex;
        }
      }
      .bar {
        svg {
          font-size: 2rem;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .navbar {
      padding: 1rem 2rem;
    }
  }

  @media only screen and (min-width: 992px) {
    .navbar {
      height: 5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--padding);
      z-index: 3;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: transparent;

      .navlinks__container {
        position: relative;
        .links {
          display: flex;
          gap: 4rem;
          align-items: center;
          justify-content: center;
          position: relative;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: row;
          background: transparent;
          box-shadow: none;
          backdrop-filter: none;
          border: none;

          a {
            padding-bottom: 0.4rem;
            font-size: 1.15rem;
            text-decoration: none;
            font-weight: 500;
            font-size: 1.3rem;
            color: var(--darkBackground);
            display: block;
            position: relative;
          }
        }
        .bar {
          display: none;
        }
      }
      &.active {
        background: var(--lightBackground);
      }
    }
  }
`;

const iconVariants = {
  opened: {
    rotate: 180,
  },
  closed: {
    rotate: 0,
  },
};

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  return (
    <Container>
      <div className={navbar ? 'navbar active' : 'navbar'}>
        <div className='logo'>
          <Logo scale='scale(0.3)' />
        </div>
        <div className='navlinks__container'>
          <li className={!toggle ? 'links show__link' : 'links'}>
            {links.map((link) => (
              <motion.a
                whileHover={{
                  scale: 1.2,
                  borderBottom: '.125rem solid var(--darkBackground)',
                }}
                href={link.url}
                key={link.id}
                onClick={(e) => {
                  handleClick(e);
                  setToggle(!toggle);
                }}
                className='link'
              >
                {link.text}
              </motion.a>
            ))}
          </li>
          <motion.div
            className='bar'
            variants={iconVariants}
            animate={toggle ? 'opened' : 'closed'}
            whileHover={{ scale: 1.4 }}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <FaBars /> : <FaTimes />}
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
