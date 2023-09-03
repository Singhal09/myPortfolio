import React from "react";
import { useTrail, animated } from "react-spring";
import { FaCertificate } from "react-icons/fa";
import "./certificates.css";

const certificatesData = [
  "Certificate 1",
  "Certificate 2",
  "Certificate 3",
  // Add more certificates here
];

const Certificates = () => {
  const trail = useTrail(certificatesData.length, {
    from: { opacity: 0, transform: "translate3d(0, 30px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
  });

  return (
    <section id="certificate">
    <div className="certificates-section">
      <h2>Certificates</h2>
      <div className="certificates-list">
        {trail.map((animation, index) => (
          <animated.div key={index} style={animation}>
            <div className="certificate-item">
              <FaCertificate className="certificate-icon" />
              <p>{certificatesData[index]}</p>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Certificates;

