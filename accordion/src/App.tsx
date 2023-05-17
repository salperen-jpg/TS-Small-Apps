import { useState } from 'react';
import Questions from './Questions';
import Ques from './data';

export interface Question {
  id: number;
  title: string;
  info: string;
}

function App() {
  const [questions, setQuestions] = useState(Ques);
  const [activeId, setActiveId] = useState<null | number>(null);

  const toggleActiveId = (id: number) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleActiveId={toggleActiveId}
      />
    </main>
  );
}

export default App;
