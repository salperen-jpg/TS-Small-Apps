import logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import data from '../data';
const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='strapi' />
          <button className='btn sidebar-btn'>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {data.map((link) => {
            return (
              <li key={nanoid()} className='nav-link'>
                {link.title}
              </li>
            );
          })}
        </ul>
        <button type='button' className='get-started btn'>
          get started
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
