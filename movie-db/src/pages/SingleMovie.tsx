import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_ENDPOINT } from '../utils/endpoint';

const SingleMovie = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({
    img: '',
    title: '',
  });
  const [isError, setIsError] = useState({
    show: false,
    text: '',
  });
  const { id } = useParams();

  const fetchMovie = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}?apikey=${import.meta.env.VITE_MOVIE_KEY}&i=${id}`
      );
      const data = await response.json();
      console.log(data);
      if (data.Response === 'True') {
        const { Poster: img, Title } = data;
        setMovie({ img, title: Title });
      } else {
        setIsError({ show: true, text: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  if (isLoading) {
    return (
      <section className='single-movie'>
        <div className='loading'></div>
      </section>
    );
  }

  return (
    <section className='single-movie'>
      <div>
        <h2>{movie.title}</h2>
        <img src={movie.img} alt='' />
        <Link to='/' className='btn'>
          Back movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
