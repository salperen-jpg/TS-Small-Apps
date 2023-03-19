import { Food } from '../types/food.types';
import React from 'react';

interface MenuProp {
  food: Food[];
}

const Menu: React.FC<MenuProp> = ({ food }) => {
  return (
    <section>
      <div className='menu-center'>
        {food.map((f) => {
          return (
            <article key={f.id}>
              <img src={f.img} alt='' />
              <div className='info'>
                <h4>{f.title}</h4>
                <p>{f.price}</p>
                <h1>{f.category}</h1>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
