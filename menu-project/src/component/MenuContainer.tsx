import React from 'react';
import menu from '../utils/data';
import Buttons from './Buttons';
import Menu from './Menu';

const getCategories = ['all', ...new Set(menu.map((m) => m.category))];

const MenuContainer = () => {
  const [food, setFood] = React.useState(menu);
  const [currentCat, setCurrentCat] = React.useState('all');

  const handleFood = (category: string) => {
    category === 'all'
      ? setFood(menu)
      : setFood(menu.filter((m) => m.category === category));
    setCurrentCat(category);
  };

  return (
    <>
      <Buttons
        categories={getCategories}
        handleFood={handleFood}
        currentCat={currentCat}
      />
      <Menu food={food} />
    </>
  );
};

export default MenuContainer;
