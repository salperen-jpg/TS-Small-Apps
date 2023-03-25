import './App.css';
import ButtonContainer from './components/ButtonContainer';
import News from './components/News';
import SearchForm from './components/SearchForm';
import Title from './components/Title';

function App() {
  return (
    <main>
      <Title />
      <SearchForm />
      <ButtonContainer />
      <News />
      <ButtonContainer />
    </main>
  );
}

export default App;
