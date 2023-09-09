import React, { useState } from 'react';
import './education.css';
import college from './assets/images/college.jpg';


const Education = () => {
  return (
    <section className="education-section">
      <div className="education-content">
        <h2>Education</h2>
        <div className="education-entry">
          <h3>Durham College</h3>
          <p>Diploma in Computer Programming</p>
          <p>Graduated: April 2023</p>
          <p>GPA: 4.7/5.0</p>
        </div>
      </div>
      <div className="college-picture">
        <img
          src={college} 
          alt="College Picture"
        />
      </div>
    </section>
  );
};

export default Education;

