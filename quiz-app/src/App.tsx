import { useQuizContext } from './context/context';
import Form from './components/Form';
import Modal from './components/Modal';
import Timer from './components/Timer';
import HeaderRow from './components/HeaderRow';
import { MdCategory, MdPoll } from 'react-icons/md';

function App() {
  const {
    isFormShown,
    questions,
    correct,
    index,
    checkAnswer,
    nextQuestion,
    quiz,
    isModalOpen,
  } = useQuizContext();

  if (isFormShown) {
    return (
      <main>
        <Form />
      </main>
    );
  }

  const { question, incorrect_answers, correct_answer } = questions[index];

  const options = [...incorrect_answers];

  const rightAnswerIndex = Math.floor(Math.random() * 4);

  if (rightAnswerIndex === 3) {
    options.push(correct_answer);
  } else {
    options.push(options[rightAnswerIndex]);
    options[rightAnswerIndex] = correct_answer;
  }

  return (
    <main>
      <Modal />
      <div className='container question-container question-display'>
        <div className='header'>
          <div>
            <HeaderRow icon={<MdCategory />} text={quiz.category} />
            <HeaderRow icon={<MdPoll />} text={quiz.difficulty} />
          </div>
          <h4>
            your score : {correct} / {index}
          </h4>
          {!isModalOpen && <Timer />}
        </div>
        <div className='question'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            {options.map((option, index) => {
              return (
                <button
                  type='button'
                  className='btn answer-btn'
                  key={index}
                  dangerouslySetInnerHTML={{ __html: option }}
                  onClick={() => checkAnswer(option === correct_answer)}
                />
              );
            })}
          </div>
        </div>
        <div className='next'>
          <button className='btn next-btn' onClick={nextQuestion}>
            next question
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
