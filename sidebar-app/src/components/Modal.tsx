import React from 'react';
import { useUIContext } from '../context';

const Modal = () => {
  const { isModalOpen, toggleModal } = useUIContext();
  return (
    <aside className={isModalOpen ? 'modal show-modal' : 'modal'}>
      <div className='modal-content'>
        <h4>It is the modal open</h4>
        <button className='btn close-btn' onClick={toggleModal}>
          Close modal
        </button>
      </div>
    </aside>
  );
};

export default Modal;
