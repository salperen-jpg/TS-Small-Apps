import React from 'react';
import { useQuizContext } from '../context/context';

const Modal = () => {
  const { isModalOpen, correct, questions, closeModal } = useQuizContext();
  return (
    <aside className={`${isModalOpen ? 'modal show-modal' : 'modal'}`}>
      <div className='modal-content'>
        <span>
          Congrats ! You answered{' '}
          <strong>{(correct / questions.length) * 100}%</strong> correct !
        </span>
        <button type='button' className='btn play-again' onClick={closeModal}>
          play again
        </button>
      </div>
    </aside>
  );
};

export default Modal;
