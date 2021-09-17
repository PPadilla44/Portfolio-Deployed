import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Color pallete
// https://colorhunt.co/palette/ffe6e6ff2626bd1616000000
// https://colorhunt.co/palette/fdd2bfff6b6bb61919012443

function App() {

  const [blur, setBlur] = useState(false);

  return (
    <div className="App" name="top">
      { blur && <div className="blurBackground"/>}
      <Nav setBlur={setBlur}/>
      <main>
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
