import { useState } from 'react';
import Experience from './components/Experience';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Techs from './components/Techs';

function App() {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Header />
      <Experience />
      <Techs />
    </main>
  );
}

export default App;
