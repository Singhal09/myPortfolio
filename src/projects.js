import React from 'react';
import { useSpring, animated } from 'react-spring';
import './projects.css';

function Projects() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Adjust animation speed as needed
  });

  return (
    <animated.div style={fadeIn}>
      <section id="project" className='Projects'>
      <div className='project-container'>
      <div className='project'>
        <h2>Projects</h2>
        <p>{"abcdefghijklmnopqrstuvwxyz"}</p>
        </div>
        <div className='project'>
        <h2>Projects</h2>
        <p>{"abcdefghijklmnopqrstuvwxyz"}</p>
        </div>
        <div className='project'>
        <h2>Projects</h2>
        <p>{"abcdefghijklmnopqrstuvwxyz"}</p>
        </div>
        </div>
      </section>
    </animated.div>
  );
}

export default Projects;
