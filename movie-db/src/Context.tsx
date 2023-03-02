import React, { createContext, ReactNode, useState, useEffect } from 'react';

const API_ENDPOINT = 'https://www.omdbapi.com/';
// https://www.omdbapi.com/?apikey=4d5701f8&s=batman
export type Movie = {
  title: string;
  year: string;
  img?: string;
  type: string;
  id: string;
};

type ContextType = {
  query?: string;
  movies?: Movie[];
  isLoading: boolean;
  handleQuery: (text: string) => void;
  isError: { show: boolean; text: string };
};

interface Props {
  children: React.ReactNode;
}

type ContextValue = {};

const MovieDB = createContext<ContextType>({
  query: 'batman',
  isLoading: true,
  movies: [],
  handleQuery: () => {},
  isError: { show: false, text: '' },
});

export const MovieProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('batman');
  const [isError, setIsError] = useState({
    show: false,
    text: '',
  });

  const fetchMovies = async (query: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}?apikey=${import.meta.env.VITE_MOVIE_KEY}&s=${query}`
      );
      const data = await response.json();
      if (data.Response === 'True') {
        console.log(data);
        const mappedData = data.Search.map(
          (movie: {
            Poster?: string;
            Title: string;
            Type: string;
            Year: string;
            imdbID: string;
          }) => {
            const { Poster, Title, Type, Year, imdbID } = movie;
            return {
              img: Poster,
              title: Title,
              year: Year,
              type: Type,
              id: imdbID,
            };
          }
        );
        invokeError();
        setMovies(mappedData);
      } else {
        invokeError(true, data.Error);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const invokeError = (show: boolean = false, text: string = '') => {
    setIsError({ show, text });
  };

  const handleQuery = (text: string) => {
    setQuery(text);
  };

  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  return (
    <MovieDB.Provider
      value={{ isLoading, movies, query, handleQuery, isError }}
    >
      {children}
    </MovieDB.Provider>
  );
};

export const useMovieDBContext = () => React.useContext(MovieDB);
