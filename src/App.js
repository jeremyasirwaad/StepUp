
import { Landing } from './components/Landing/Landing';
import './App.css';
import { Navbar } from './components/NavBar/Navbar';
import { ImageSlider } from './components/ImageSlider/ImageSlider';
import  Section2  from './components/Section2/Section2'
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import Footer from './components/Footer/Footer';
import logo from './components/NavBar/151517978_1629864483_IMG-20201010-WA0000.jpg'
import './components/Landing/Landing.css'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />

    </div>
  );
}

export default App;
