import Experience from './components/Experience';
import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Techs from './components/Techs';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <main>
      <Navbar />
      {/* <Sidebar /> */}
      <Header />
      <Experience />
      <Techs />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
