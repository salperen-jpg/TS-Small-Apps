import { AiOutlineClose } from 'react-icons/ai';
import { nanoid } from 'nanoid';
import data from '../data';
import { useStrapiContext } from '../Context';
const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useStrapiContext();
  return (
    <aside className={isSidebarOpen ? `sidebar show` : 'sidebar'}>
      <div className='sidebar-content'>
        <button className=' btn close-btn' onClick={toggleSidebar}>
          <AiOutlineClose />
        </button>
        <ul className='links'>
          {data.map((link) => {
            const { title, links } = link;
            return (
              <li key={nanoid()} className='sidebar-links'>
                <span className='title'>{title}</span>
                <div className='inner-links'>
                  {links.map((l) => {
                    return (
                      <span key={nanoid()} className='inner-link'>
                        {l}
                      </span>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
