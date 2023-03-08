import React from 'react';
import styled from 'styled-components';
import { usePortfolioContext } from '../context';
import { NavLinks } from '../utils/NavLinks';
NavLinks;
const Sidebar = () => {
  const { isSidebarOpen } = usePortfolioContext();
  return (
    <Wrapper>
      <aside className={isSidebarOpen ? 'sidebar show' : 'sidebar'}>
        <ul className='sidebar-links'>
          {NavLinks.map((navlink) => {
            const { id, text, link } = navlink;
            return (
              <li key={id} className='sidebar-link'>
                <a href={link}>{text}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  box-shadow: 1px solid var(--grey-800);
  box-shadow: var(--shadow-4);

  .sidebar {
    background: var(--clr-primary-500);
    transition: all 0.3s linear;
    height: 0;
    overflow: hidden;
    background: #1c1e31;
  }
  .show {
    opacity: 1;
    transform: translateY(0);
    z-index: 1;
    height: 115px;
  }
  .sidebar-links {
    width: 90vw;
    margin: 0 auto;
    .sidebar-link {
      margin-bottom: 1rem;
    }
    .sidebar-link:nth-last-child(1) {
      margin-bottom: 0;
    }
  }
  @media (min-width: 992px) {
    display: none;
  }
`;
