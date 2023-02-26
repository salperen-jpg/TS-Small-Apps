import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdOutlineWbSunny } from 'react-icons/md';

const getLocalStorage: () => string = () => {
  return localStorage.getItem('theme')
    ? (localStorage.getItem('theme') as string)
    : 'light-theme';
};

const Navbar = () => {
  const [theme, setTheme] = useState(getLocalStorage());

  const changeTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav>
      <div className='nav-center'>
        <h1>Overreacted</h1>
        <button type='button' onClick={changeTheme}>
          {theme === 'light-theme' ? <MdDarkMode /> : <MdOutlineWbSunny />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
