import React, { createContext, ReactNode, useState, useEffect } from 'react';

type ContextType = {
  query?: string;
  movies?: [];
  isLoading?: boolean;
};

interface Props {
  children: React.ReactNode;
}

type ContextValue = {};

const MovieDB = createContext<ContextType | null>(null);

export const MovieProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const fetchMovies = async () => {
    try {
    } catch (error) {}
  };

  useEffect(() => {}, []);
  return <MovieDB.Provider value={{}}>{children}</MovieDB.Provider>;
};

export const useMovieDBContext = () => React.useContext(MovieDB);
