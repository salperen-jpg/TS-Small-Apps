import React, { useEffect, useState } from 'react';
import paginate from '../utils/paginate';
import { Person } from './Person.model';

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [people, setPeople] = useState<Person[][]>([]);
  const fetchPeople = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const newData = data.map((d: { avatar_url: string; login: string }) => {
        const { avatar_url, login } = d;
        return { avatar_url, login };
      });
      setPeople(paginate(newData));
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchPeople(url);
  }, []);
  return { isLoading, people };
};

export default useFetch;
