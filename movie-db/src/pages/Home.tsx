import React from 'react';
import Form from '../components/Form';
import Movies from '../components/Movies';

const Home = () => {
  return (
    <main>
      <div className='section-title'>
        <h1>Movie DB</h1>
        <div className='underline'></div>
      </div>
      <Form />
      <Movies />
    </main>
  );
};

export default Home;
