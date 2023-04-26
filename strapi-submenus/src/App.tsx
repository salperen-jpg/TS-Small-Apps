import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Submenu from './components/Submenu';

function App() {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </main>
  );
}

export default App;
