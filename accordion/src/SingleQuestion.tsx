import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface SingleQuestionProp {
  id: number;
  title: string;
  info: string;
  activeId: null | number;
  toggleActiveId: (id: number) => void;
}
const SingleQuestion: React.FC<SingleQuestionProp> = ({
  id,
  title,
  info,
  activeId,
  toggleActiveId,
}) => {
  return (
    <article className='question'>
      <div className='question__header'>
        <span>{title}</span>
        <button className='btn' onClick={() => toggleActiveId(id)}>
          {activeId === id ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <div className={activeId === id ? `show-p p-container` : 'p-container'}>
        <p>{info}</p>
      </div>
    </article>
  );
};
export default SingleQuestion;
