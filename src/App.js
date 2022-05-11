import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
