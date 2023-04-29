import Form from './components/Form';
import Title from './components/Title';
import Total from './components/Total';

function App() {
  return (
    <main>
      <Title />
      <div className='container'>
        <Form />
        <Total />
      </div>
    </main>
  );
}

export default App;
