import styled from 'styled-components';
import LinkContainer from '../LinkContainer/LinkContainer';
import Logo from '../Logo/Logo';
import { links } from '../Navbar/data';

const Container = styled.footer`
  padding: var(--sectionpadding);
  background: var(--mainBackground);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .footer {
    display: flex;
    align-items: center;

    .logo {
      flex: 1;
      margin-left: -1rem;
    }
    .links {
      flex: 1;
      margin-left: -12rem;
    }
  }

  .nav__links {
    display: flex;
    gap: 2rem;
    row-gap: 0.5rem;
    padding: 1rem;
    flex-wrap: wrap;
    margin-top: -1rem;
    justify-content: center;
    align-items: center;
    a {
      text-decoration: none;
      font-size: 1.1rem;
      color: var(--greenBackground);
      border-right: 0.125rem solid var(--greenBackground);
      padding-right: 1rem;
    }
    a:last-child {
      border: 0;
    }
  }
  p {
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: capitalize;
  }

  @media screen and (min-width: 992px) {
    height: 50vh;
    padding: var(--padding);
    background: var(--mainBackground);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .footer {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 15vh;

      .logo {
        flex: 1;
        margin-left: -3rem;
      }
      .links {
        flex: 1;
        margin-left: -80%;
      }
    }

    .nav__links {
      display: flex;
      gap: 2rem;
      padding: 1rem;

      a {
        text-decoration: none;
        font-size: 1.3rem;
        color: var(--greenBackground);
        border-right: 0.125rem solid var(--greenBackground);
        padding-right: 1rem;
      }
      a:last-child {
        border: 0;
      }
    }
    p {
      font-size: 1.3rem;
      font-weight: 500;
      text-transform: capitalize;
    }
  }
`;

const Footer = () => {
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
      <div className='footer'>
        <div className='logo'>
          <Logo scale='scale(0.11)' />
        </div>
        <div className='links'>
          <LinkContainer
            direction={'row'}
            position='relative'
            top='0'
            border='0'
            left='0'
            fontSize='2rem'
            gap='1.2rem'
          />
        </div>
      </div>
      <div className='nav__links'>
        {links.map((link) => (
          <a href={link.url} key={link.id} onClick={handleClick}>
            {link.text}
          </a>
        ))}
      </div>
      <p>
        copyright &copy; {new Date().getFullYear()} <span>[08142407972]</span>
      </p>
    </Container>
  );
};

export default Footer;
