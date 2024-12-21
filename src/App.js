import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Links from './components/Links';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Welcome/>
    <About/>
    <Experience/>
    <Projects/>
    <Links/>
    <Footer/>
    </div>
  );
}

export default App;
