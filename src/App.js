import React from 'react';
import './App.css';
import Projects from './projects';
import About from './about';
import NavigationBar from './navigationBar';
import backgroundImage from './images/port.avif';
import pic from "./images/pic.jpeg";


function App() {

  return (
    <div className="App">
    <NavigationBar/>
       <header className="App-header name-title-container header">
       <div className='header-background'></div>
       <div className='header-content'>
        <h1 className='name slide-in'>Sanya Singhal</h1>
        <p className='bounce'>Full Stack Developer</p>
        </div>
      </header>

      {/* <section id="about" className="about About about-section about-overlay">
      <div className='about-content'>
      <div className='about-text'>
        <h2 className='about-heading'>About Me</h2>
        <p className='about-description'>
        A passionate and versatile full-stack developer with a deep love for crafting web applications 
        that not only work seamlessly but also provide a delightful user experience. 
        My journey into the world of technology began with a curiosity-driven exploration, 
        and it has since evolved into a lifelong pursuit of knowledge and innovation.

        </p>
        </div>
        <div className="about-image">
          <img src={pic} alt="Sanya Singhal" />
        </div>
        </div>
      </section> */}

      <About/>
      
      <section id="projects">
      <Projects/>
      </section>

      <section id="contact" className="Contact">
        <h2>Contact</h2>
        <p>Email: sanyasingla2003@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/sanya-singhal/</p>
        <p>GitHub: github.com/Singhal09</p>
      </section>

      
    </div>
  );
}

export default App;
