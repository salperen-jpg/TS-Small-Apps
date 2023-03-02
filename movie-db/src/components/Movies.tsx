import { useMovieDBContext } from '../Context';
import { Link } from 'react-router-dom';
import Movie from './Movie';
const Movies = () => {
  const { movies, isLoading } = useMovieDBContext();
  console.log(useMovieDBContext());

  if (isLoading) {
    return <div className='loading'></div>;
  }

  return (
    <section>
      <div className='section-center movie-center'>
        {movies?.map((movie, index) => {
          const { img, year, title, type, id } = movie;
          return <Movie key={id} {...movie} />;
        })}
      </div>
    </section>
  );
};

export default Movies;
