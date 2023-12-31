//import logo from './logo.svg';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>

      
    </div>
  );
}

export default App;
