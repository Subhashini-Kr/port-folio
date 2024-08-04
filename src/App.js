import './App.css';
import AboutDesc from './components/about/aboutDesc';
import ContactForm from './components/contact/contactForm';
import ContactLinks from './components/contact/contactLinks';
// import Laptop from './components/projects/devices/laptop';
// import Phone from './components/projects/devices/phone';
// import Tablet from './components/projects/devices/tablet';
import Keyboard from './components/home/keyboard';
import Beaker from './components/home/beaker';
import Click from './components/home/click';
// import Projects from './components/projects';
import Skills from './components/skills';
import Flowers from './components/flowers';
// import Snowfall from './Snowfall';
// import Stars from './stars';

function App() {
  return (
    <div className="App">
      <Click/>
      <Beaker/>
      <Keyboard/>
      <AboutDesc/>
      {/* <Projects/> */}
      <Skills/>
      <ContactLinks/>
      <ContactForm/>
      <div className="flowerOuter">
        {/* <Flowers /> */}
        {/* <Flowers /> */}
        <Flowers />
      </div>
      {/* <Snowfall /> */}
      {/* <Stars /> */}
    </div>
  );
}

export default App;
