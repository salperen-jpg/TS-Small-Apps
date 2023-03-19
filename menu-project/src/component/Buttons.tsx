import React from 'react';

interface ButtonTypes {
  categories: string[];
  handleFood: (c: string) => void;
  currentCat: string;
}

const Buttons: React.FC<ButtonTypes> = ({
  categories,
  handleFood,
  currentCat,
}) => {
  return (
    <section>
      <div className='btn-container'>
        {categories.map((m, index) => {
          return (
            <button
              key={index}
              className={`${currentCat === m ? 'btn active' : 'btn'}`}
              onClick={() => handleFood(m)}
            >
              {m}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Buttons;
