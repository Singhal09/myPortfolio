import React from "react";
import { useTrail, animated } from "react-spring";
import { FaCertificate } from "react-icons/fa";
import "./certificates.css";
import certificate1 from './assets/images/certificate1.png';
import certificate2 from './assets/images/certificate2.png';
import certificate3 from './assets/images/certificate3.png';
import certificate4 from './assets/images/certificate4.png';
import certificate5 from './assets/images/certificate5.png';
import certificate6 from './assets/images/certificate6.png';
import certificate7 from './assets/images/certificate7.png';




const certifications = [
  {
    name: 'REACT',
    imageUrl: certificate1,
  },
  {
    name: 'GraphQL',
    imageUrl: certificate2,
  },
  {
    name: 'C#',
    imageUrl: certificate3,
  },
  {
    name: 'SQL',
    imageUrl: certificate4,
  },
  {
    name: 'Java',
    imageUrl: certificate5,
  },
  {
    name: 'JavaScript',
    imageUrl: certificate6,
  },
  {
    name: 'Python',
    imageUrl: certificate7,
  },
  // Add more certifications as needed
];

const Certificates = () => {
  const trail = useTrail(certifications.length, {
    from: { opacity: 0, transform: "translate3d(0, 30px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
  });

  return (
    <section id="certificate">
    <div className="certificates-section">
      <h2>Certificates</h2>
      <div className="certificates">
        {certifications.map((certification, index) => (
          <div className="certificate" key={index}>
            <a
              href={certification.imageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={certification.imageUrl}
                alt={certification.name}
                className="certificate-image"
              />
            </a>
            <p className="certificate-name">{certification.name}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Certificates;

