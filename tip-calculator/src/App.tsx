import Form from './components/Form';
import Total from './components/Total';

function App() {
  return (
    <main>
      <div className='title'>
        <span>
          spli <br></br>
          tter
        </span>
      </div>
      <div className='container'>
        <Form />
        <Total />
      </div>
    </main>
  );
}

export default App;
