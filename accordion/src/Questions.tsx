import { Question } from './App';
import SingleQuestion from './SingleQuestion';
interface QuestionsProp {
  questions: Question[];
  activeId: null | number;
  toggleActiveId: (id: number) => void;
}
const Questions: React.FC<QuestionsProp> = ({
  questions,
  activeId,
  toggleActiveId,
}) => {
  return (
    <section className='container'>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleActiveId={toggleActiveId}
          />
        );
      })}
    </section>
  );
};
export default Questions;
