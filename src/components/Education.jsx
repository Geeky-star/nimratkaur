import './Education.css';
import iiitb from '../assets/iiitb.jpg';

export default function Education() {
  return (
    <div className="education-container">
      <span className="education-heading">My Education</span>
      
      {/* IIIT Bhopal */}
      <div className="education-box">
        <div className="education-box-item">
          <img src={iiitb} alt="IIIT Bhopal" className="education-image" />
          <div className="education-details">
            <div className="education-title-gpa">
              <span className="education-title">Indian Institute of Information Technology, Bhopal</span>
              <p className="education-gpa">GPA: 9.1/10</p>
            </div>
            <p className="education-program">Bachelor of Technology, Computer Science</p>
          </div>
        </div>
        <div className="education-description">
          <ul className="education-list">
            <li>Specialized in different programming languages like JavaScript, Python, and Java.</li>
            <li>Studied core subjects such as Database Management Systems, Data Structures and Algorithms, Computer Networks, and Software Development Life Cycle.</li>
            <li>Studied advanced topics in Mathematics, Data Analysis, Analytics, and Machine Learning.</li>
            <li>Built full-stack projects using MERN Stack and hands-on-experience building serverless applications using AWS.</li>
          </ul>
        </div>
      </div>
      
      {/* Additional Education Placeholder */}
      {/* Add other education details here if needed */}
    </div>
  );
}
