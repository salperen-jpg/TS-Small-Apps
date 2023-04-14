import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useUIContext } from '../context';
const Buttons = () => {
  const { toggleSidebar, toggleModal } = useUIContext();
  return (
    <section>
      <button className='btn toggle-sidebar' onClick={toggleSidebar}>
        <FaBars />
      </button>
      <button className='btn open-modal' onClick={toggleModal}>
        open modal
      </button>
    </section>
  );
};

export default Buttons;
