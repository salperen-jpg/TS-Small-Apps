import React, { useContext, createContext, useState } from 'react';
import axios from 'axios';
import { API_ENDPOINT } from '../utils/constants';

interface Map {
  [key: string]: string;
}

const table: Map = {
  history: '23',
  sports: '21',
  politics: '24',
};

interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface ContextProps {
  isLoading: boolean;
  isFormShown: boolean;
  questions: Question[];
  isError: boolean;
  index: number;
  correct: number;
  nextQuestion: () => void;
  checkAnswer: (a: boolean) => void;
  closeModal: () => void;
  isModalOpen: boolean;
  quiz: {
    amount: string;
    category: string;
    difficulty: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  fetchQuestions: (url: string) => void;
}

const QuizContext = createContext<ContextProps>({
  isLoading: false,
  isFormShown: true,
  questions: [],
  isError: false,
  index: 0,
  correct: 0,
  nextQuestion() {},
  checkAnswer() {},
  closeModal() {},
  isModalOpen: false,
  quiz: {
    amount: '20',
    category: 'sports',
    difficulty: 'easy',
  },
  handleChange: () => {},
  fetchQuestions: () => {},
  handleSubmit: () => {},
});

interface ChildrenProp {
  children: React.ReactNode;
}

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
  // const url =
  //   'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple';

  const fetchQuestions = async (url: string) => {
    setIsLoading(true);
    try {
      const {
        data: { results },
      } = await axios(url);
      console.log(results);
      if (results.length > 0) {
        setQuestions(results);
        setIsLoading(false);
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
    console.log('fetched');
    // https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple
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
