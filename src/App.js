import React from 'react';
import './App.css';
import Projects from './projects';

function App() {
  return (
    <div className="App">
      <header className="App-header name-title-container header">
        <h1 className='name'>Sanya Singhal</h1>
        <p>Full Stack Developer Developer</p>
      </header>

      <section className="About">
        <h2>About Me</h2>
        <p>
        A passionate and versatile full-stack developer with a deep love for crafting web applications 
        that not only work seamlessly but also provide a delightful user experience. 
        My journey into the world of technology began with a curiosity-driven exploration, 
        and it has since evolved into a lifelong pursuit of knowledge and innovation.

        </p>
      </section>
      
      
      <Projects/>

      <section className="Contact">
        <h2>Contact</h2>
        <p>Email: sanyasingla2003@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/sanya-singhal/</p>
        <p>GitHub: github.com/your-username</p>
      </section>

      
    </div>
  );
}

export default App;
