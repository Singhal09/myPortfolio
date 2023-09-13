import React, { useEffect, useState } from 'react';
import "./navigation.css";

function NavigationBar() {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition <= top + height) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="navbar">
      <ul>
        <li className={activeLink === 'about' ? 'active' : ''}>
          <a href="#about">About Me</a>
        </li>
        <li className={activeLink === 'education' ? 'active' : ''}>
          <a href="#education">Education</a>
        </li>
        <li className={activeLink === 'projects' ? 'active' : ''}>
          <a href="#projects">Projects</a>
        </li>
        <li className={activeLink === 'certificate' ? 'active' : ''}>
          <a href="#certificate">Certificate</a>
        </li>
        <li className={activeLink === 'contact' ? 'active' : ''}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
