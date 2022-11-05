
import './App.css';
import Info from './Components/Info';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Hobbies from './Components/Hobbies';

function App() {
  return (
    <>
      <div className="container">
        <Info />
        <Experience />
        <Skills />
        <Hobbies />
      </div>
    </>
  );
}

export default App;
