import { useState } from 'react';
import { useMovieDBContext } from './Context';

function App() {
  const data = useMovieDBContext();
  console.log(import.meta.env.VITE_MOVIE_KEY);
  return <div className='App'></div>;
}

export default App;
