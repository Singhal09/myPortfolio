import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import pic from "./assets/images/pic.jpeg";

function About() {
  const [isImageVisible, setImageVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    // Function to check if the image is in the viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Function to handle scroll events
    function handleScroll() {
      if (isElementInViewport(imageRef.current)) {
        setImageVisible(true);
      }
    }

    // Add a scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>My journey in the field began with a comprehensive computer programming course, 
          where I honed my skills in various programming languages and developed a solid foundation in software and web development.
            <br/><br/>
            I am a quick learner and enjoy staying up-to-date with the latest technologies and programming trends. 
            My curiosity and eagerness to expand my knowledge have driven me to explore and become proficient in multiple 
            programming languages, including C#, Java, .NET Framework, Python, HTML, PHP, COBOL, JavaScript, node.js, express.js, 
            React, MongoDB, MySQL, GraphQL and CSS.
            <br/><br/>
            I thrive in dynamic and fast-paced environments, where I can continuously learn and adapt to new technologies. 
            I am excited to join a team that encourages growth, and values the power of programming as a catalyst for change.</p>
        </div>
        <div className="about-image" ref={imageRef}>
          <img
            src={pic}
            alt="Sanya Singhal"
            className={isImageVisible ? 'animated' : ''}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
