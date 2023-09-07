// import React from 'react';
// import { useSpring, animated } from 'react-spring';
// import './projects.css';

// function Projects() {
//   const fadeIn = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//     config: { duration: 1000 }, // Adjust animation speed as needed
//   });

//   return (
//     <animated.div style={fadeIn}>
//       <section id="project" className='Projects'>
//       <div className='project-container'>
//       <div className='project'>
//         <h2>Projects</h2>
//         <p>{"abcdefghijklmnopqrstuvwxyz"}</p>
//         </div>
//         <div className='project'>
//         <h2>Projects</h2>
//         <p>{"abcdefghijklmnopqrstuvwxyz"}</p>
//         </div>
//         <div className='project'>
//         <h2>Projects</h2>
//         <p>{"abcdefghijklmnopqrstuvwxyz"}</p>
//         </div>
//         </div>
//       </section>
//     </animated.div>
//   );
// }

// export default Projects;

import React from 'react';
import './projects.css';
import card1 from './assets/images/card1.png';
import card2 from './assets/images/card2.png';
import card3 from './assets/images/card3.png';
import card4 from './assets/images/card4.png';
import web1 from './assets/images/web1.png';
import web2 from './assets/images/web2.png';
import web3 from './assets/images/web3.png';
import web4 from './assets/images/web4.png';


const projects = [
  {
    title: 'Tarneeb Card Game',
    description: 'The Tarneeb Game-Play Logic project is a digital adaptation of the classic card game Tarneeb.'+
    'The game is designed to be played by four players with three computer controlled players and one human-controlled player.'+
    'The primary objective of this project is to implement the games rules, create an intuitive graphical user interface (GUI),'+
    'and incorporate advanced Artificial Intelligence (AI) for computer players. Additionally, the project aims to showcase strong'+
    'object-oriented programming (OOP) concepts and provide comprehensive internal documentation for code clarity.',
    skills: 'C#, WPF, GUI, SQL',
    imageUrls: [card1, card2, card3, card4], // Replace with the actual image URL
  },
  {
    title: 'Web Development Project',
    description: 'The Web Development Project is a culmination of my skills and knowledge acquired during my college web'+
    'development course. This project demonstrates my proficiency in web technologies, including JavaScript and TypeScript,'+
    'as well as my ability to connect to a database using MongoDB. The project features a login page and a contact page, '+
    'showcasing both front-end and back-end development capabilities.',
    skills: 'JavaScript, TypeScript, HTML/CSS, MongoDB',
    imageUrls: [web1, web2, web3, web4], // Replace with the actual image URL
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="project-section">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
          <h2>{project.title}</h2>
    <p>{project.description}</p>
    <h3>Skills: {project.skills}</h3>
    <div className="project-screenshots">
      {project.imageUrls.map((imageUrl, i) => (
        <img
          key={i}
          src={imageUrl}
          alt={`${project.title} Screenshot ${i + 1}`}
          className='project-screenshot'
        />
      ))}
      </div>
      
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

