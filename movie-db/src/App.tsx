import { useState } from 'react';
import Form from './components/Form';
import Movies from './components/Movies';
import { useMovieDBContext } from './Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:id' element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
