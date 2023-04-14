import React from 'react';
import { useUIContext } from '../context';
import { links, socials } from '../utils';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useUIContext();
  return (
    <aside
      className={isSidebarOpen ? 'sidebar open-sidebar' : 'sidebar'}
      onClick={toggleSidebar}
    >
      <div className='sidebar-content'>
        <div className='btn-cont'>
          <button className='btn close-btn'>
            <AiOutlineClose />
          </button>
        </div>
        <ul className='links'>
          {links.map((link) => {
            const { id, text, icon } = link;
            return (
              <li key={id} className='link'>
                <a href='#'>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className='socials'>
          {socials.map((social) => {
            const { id, icon } = social;
            return (
              <li className='social' key={id}>
                {icon}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
