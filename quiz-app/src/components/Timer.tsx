import React from 'react';
import { useQuizContext } from '../context/context';
import { FaStopwatch20 } from 'react-icons/fa';
const Timer = () => {
  const { nextQuestion, index } = useQuizContext();
  const [currentSec, setCurrentSec] = React.useState(20);

  React.useEffect(() => {
    setCurrentSec(20);
  }, [index]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (currentSec >= 0) setCurrentSec((oldState) => oldState - 1);
    }, 1000);
    if (currentSec < 0) {
      nextQuestion();
      setCurrentSec(20);
    }
    console.log(interval);
    return () => clearInterval(interval);
  }, [currentSec]);

  return (
    <div className='timer'>
      <FaStopwatch20 />
      <h1>
        00:
        <span style={{ color: `rgba(203, 35, 118, 1) ` }}>
          {currentSec >= 10 ? currentSec : `0${currentSec}`}
        </span>
      </h1>
    </div>
  );
};

export default Timer;
