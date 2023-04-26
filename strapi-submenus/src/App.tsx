import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';

function App() {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Hero />
    </main>
  );
}

export default App;
