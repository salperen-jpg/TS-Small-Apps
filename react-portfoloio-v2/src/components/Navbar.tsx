import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { NavLinks } from '../utils/NavLinks';
import { usePortfolioContext } from '../context';
const Navbar: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = usePortfolioContext();
  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='header'>
          <h3>salih alperen</h3>
          <button className='btn nav-btn' onClick={toggleSidebar}>
            {isSidebarOpen ? <MdClose /> : <FaBars />}
          </button>
        </div>
        <ul className='nav-links'>
          {NavLinks.map((navlink) => {
            const { id, text, link } = navlink;
            return (
              <li key={id} className='navlink'>
                <a href={link}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  height: 6rem;
  background: var(--clr-primary-800);
  background: #1c1e31;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  .nav-center {
    width: var(--min-width);
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nav-btn {
      font-size: 1.5rem;
      background: transparent;
      transition: var(--transition);
    }
    .nav-btn:hover {
      background: linear-gradient(to right, var(--blueish), var(--pinkish));
    }
    h3 {
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: linear-gradient(to right, var(--blueish), var(--pinkish));
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      font-family: var(--ff-secondary);
    }
  }
  .nav-links {
    display: none;
  }
  @media screen and (min-width: 992px) {
    .nav-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
      li {
        position: relative;
      }
      li::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(to right, var(--blueish), var(--pinkish));
        transition: var(--transition);
      }
      li:hover::after {
        width: 100%;
      }
    }
  }
`;
