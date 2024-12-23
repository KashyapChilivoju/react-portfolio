import './App.css';
import WelcomePage from './components/Welcome';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Links from './components/Links';
import Footer from './components/Footer';
import StarEffect from './components/StarEffect';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <StarEffect />
      <WelcomePage />
      <About />
      <Experience />
      <Projects />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
