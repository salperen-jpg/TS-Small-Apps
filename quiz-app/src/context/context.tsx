import React, { useContext, createContext, useState } from 'react';
import axios from 'axios';
import { API_ENDPOINT } from '../utils/constants';
import {
  ContextProps,
  initialContextValues,
  ChildrenProp,
} from '../utils/Context.Models';

interface Map {
  [key: string]: string;
}

const table: Map = {
  history: '23',
  sports: '21',
  politics: '24',
};

const QuizContext = createContext<ContextProps>(initialContextValues);

export const AppProvider = ({ children }: ChildrenProp) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFormShown, setIsFormShown] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [isError, setIsError] = useState(false);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: '10',
    category: 'sports',
    difficulty: 'easy',
  });

  const fetchQuestions = async (url: string) => {
    setIsLoading(true);
    try {
      const {
        data: { results },
      } = await axios(url);
      if (results.length > 0) {
        setQuestions(results);
        setIsLoading(false);
        setIsError(false);
        setIsFormShown(false);
      } else {
        setIsError(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const nextQuestion = () => {
    setIndex((oldState) => {
      const newIndex = oldState + 1;
      if (newIndex > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return oldState + 1;
      }
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setIsFormShown(true);
    setCorrect(0);
  };

  const checkAnswer = (opt: boolean) => {
    if (opt) {
      setCorrect((oldState) => {
        return oldState + 1;
      });
    }
    nextQuestion();
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `${API_ENDPOINT}amount=${quiz.amount}&category=${
      table[quiz.category]
    }&difficulty=easy&type=multiple`;
    fetchQuestions(url);
  };

  return (
    <QuizContext.Provider
      value={{
        isModalOpen,
        nextQuestion,
        correct,
        index,
        isLoading,
        isFormShown,
        questions,
        isError,
        checkAnswer,
        closeModal,
        quiz,
        handleChange,
        fetchQuestions,
        handleSubmit,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
