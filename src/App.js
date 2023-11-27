import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import About from './Component/About/About';
import Logos from './Component/Logos/Logos';
import Slider from './Component/Slider/Slider';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Location from './Component/Location/Location';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Logos/>
      <Slider/>
      <About/>
      <Contact/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
