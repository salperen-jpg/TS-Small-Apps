import { useStrapiContext } from '../Context';
import data from '../data';
import { nanoid } from 'nanoid';
const Submenu = () => {
  const { submenuId } = useStrapiContext();
  const currentSub = data.find((sublink) => sublink.id === submenuId);

  return (
    <aside className={currentSub ? 'submenu show-submenu' : 'submenu'}>
      <h2 className='submenu-title'>{currentSub?.title}</h2>
      <ul className='submenu-links'>
        {currentSub?.links.map((link) => {
          return (
            <li key={nanoid()} className='submenu-link'>
              {link}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Submenu;
