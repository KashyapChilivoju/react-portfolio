import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
    <Welcome/>
    <About/>
    <Experience/>
    </div>
  );
}

export default App;
