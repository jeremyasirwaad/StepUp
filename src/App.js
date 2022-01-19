
import { Landing } from './components/Landing/Landing';
import './App.css';
import { Navbar } from './components/NavBar/Navbar';
import { ImageSlider } from './components/ImageSlider/ImageSlider';
import  Section2  from './components/Section2/Section2'
import Section3 from './components/Section3/Section3';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
