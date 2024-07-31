import './Education.css';
import iiitb from '../assets/iiitb.jpg';
import gbc from '../assets/gbc.jpg';

export default function Education() {
  return (
    <div className="education-container">
      <span className="education-heading">My Education</span>
      
      {/* George Brown College */}
      <div className="education-box">
        <div className="education-box-item">
          <img src={gbc} alt="George Brown College" className="education-image" />
          <div className="education-details">
            <div className="education-title-gpa">
              <span className="education-title">George Brown College</span>
              <p className="education-gpa">GPA: 4/4</p>
            </div>
            <p className="education-program">Mobile Application Development and Strategy</p>
            <p className="education-date">January 2024 - Present</p>
          </div>
        </div>
        <div className="education-description">
          <ul className="education-list">
            <li>Specialized in crafting user-friendly and visually captivating interfaces for mobile applications, prioritizing intuitive design principles to enhance user engagement.</li>
            <li>Proficiently engineered complete mobile applications from inception to execution, adeptly addressing requirements for both iOS and Android platforms, ensuring smooth operation and exceptional user satisfaction.</li>
            <li>Successfully implemented robust Authentication and Authorization mechanisms to safeguard user data and ensure secure access within Firebase environments.</li>
            <li>Seamlessly integrated diverse APIs into mobile applications, facilitating data retrieval from external sources and unlocking enhanced functionalities for users.</li>
          </ul>
        </div>
      </div>
      
      {/* IIIT Bhopal */}
      <div className="education-box">
        <div className="education-box-item">
          <img src={iiitb} alt="IIIT Bhopal" className="education-image" />
          <div className="education-details">
            <div className="education-title-gpa">
              <span className="education-title">Indian Institute of Information Technology, Bhopal</span>
              <p className="education-gpa">GPA: 9.1/10</p>
            </div>
            <p className="education-program">Bachelor of Technology, Information Technology (IT)</p>
            <p className="education-date">August 2018 - May 2022</p>
          </div>
        </div>
        <div className="education-description">
          <ul className="education-list">
            <li>Specialized in different programming languages like JavaScript and Python.</li>
            <li>Specialized in Database Management Systems, Data Structures and Algorithms, Computer Networks, and Software Development Life Cycle.</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}
