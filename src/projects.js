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
      <section className='Projects'>
        <h2>Projects</h2>
        {"abcdefghijklmnopqrstuvwxyz"}
      </section>
    </animated.div>
  );
}

export default Projects;
