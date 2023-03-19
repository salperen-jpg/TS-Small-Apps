import { useState } from 'react';
import Buttons from './component/Buttons';
import MenuContainer from './component/MenuContainer';

function App() {
  return (
    <main>
      <div className='title'>
        <h1>Menu</h1>
        <div className='underline'></div>
      </div>
      <MenuContainer />
    </main>
  );
}

export default App;
