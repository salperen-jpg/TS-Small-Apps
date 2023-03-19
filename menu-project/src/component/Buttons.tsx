import React from 'react';

interface ButtonTypes {
  categories: string[];
  handleFood: (c: string) => void;
}

const Buttons: React.FC<ButtonTypes> = ({ categories, handleFood }) => {
  return (
    <section>
      <div className='btn-container'>
        {categories.map((m, index) => {
          return (
            <button key={index} className='btn' onClick={() => handleFood(m)}>
              {m}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Buttons;
