import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Welcome/>
    <About/>
    <Experience/>
    <Footer></Footer>
    </div>
  );
}

export default App;
