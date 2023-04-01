import React from 'react';
import { useQuizContext } from '../context/context';

const Timer = () => {
  const { nextQuestion } = useQuizContext();

  const [currentSec, setCurrentSec] = React.useState(10);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (currentSec >= 0) setCurrentSec((oldState) => oldState - 1);
    }, 1000);
    if (currentSec < 0) {
      nextQuestion();
      setCurrentSec(10);
    }
    console.log(currentSec);
    return () => clearInterval(interval);
  }, [currentSec]);

  return <h1>00:{currentSec >= 10 ? currentSec : `0${currentSec}`}</h1>;
};

export default Timer;
