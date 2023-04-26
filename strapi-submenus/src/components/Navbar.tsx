import logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import data from '../data';
import { useStrapiContext } from '../Context';
const Navbar = () => {
  const { toggleSidebar, setSubmenuId } = useStrapiContext();

  const handleSubmenu = (e: any) => {
    if (!e.target.classList.contains('nav-link')) {
      setSubmenuId(null);
    }
  };

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='strapi' />
          <button className='btn sidebar-btn' onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {data.map((link) => {
            return (
              <li
                key={link.id}
                className='nav-link'
                onMouseEnter={() => setSubmenuId(link.id)}
              >
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
