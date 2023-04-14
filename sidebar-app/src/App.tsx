import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <main>
      <Buttons />
      <Modal />
      <Sidebar />
    </main>
  );
}

export default App;
