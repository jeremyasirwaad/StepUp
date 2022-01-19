
import { Landing } from './components/Landing/Landing';
import './App.css';
import { Navbar } from './components/NavBar/Navbar';
import { ImageSlider } from './components/ImageSlider/ImageSlider';
import  Section2  from './components/Section2/Section2'
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ImageSlider /> */}
      <Landing />
      {/* <Section2 /> */}
    </div>
  );
}

export default App;
