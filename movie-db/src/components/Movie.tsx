import { Movie as MovieProps } from '../Context';
import React from 'react';
import { Link } from 'react-router-dom';
const Movie: React.FC<MovieProps> = ({ id, img, title, year, type }) => {
  return (
    <Link to={`/movies/${id}`} className='movie'>
      <img src={img} alt='title' />
      <div className='info'>
        <h4>{title}</h4>
        <div className='underline'></div>
        <p>{year}</p>
        <p className='type'>{type}</p>
      </div>
    </Link>
  );
};

export default Movie;
