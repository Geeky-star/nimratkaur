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
            {/* <p className="education-date">August 2018 - May 2022</p>*/ }
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

/*
George brown college
<div className="education-box">
<div className="education-box-item">
  <img src={gbc} alt="George Brown College" className="education-image" />
  <div className="education-details">
    <div className="education-title-gpa">
      <span className="education-title">George Brown College</span>
      <p className="education-gpa">GPA: 4/4</p>
    </div>
    <p className="education-program">Master in Information Technology</p>
 
  </div>
</div>
<div className="education-description">
  <ul className="education-list">
    <li>Mastered advanced optimization techniques, including algorithmic complexity analysis and space-time tradeoffs, to design efficient and scalable software solutions.</li>
    <li>Acquired hands-on experience in designing and building full-fledged software solutions from concept to deployment, applying best practices for both frontend and backend development.</li>
    <li>Gained proficiency in building robust and fault-tolerant systems, implementing redundancy, error handling, and recovery techniques to ensure high availability and reliability.</li>
    <li>Learned to apply load balancing, caching strategies, and database indexing to enhance system performance and ensure quick response times in high-traffic applications.</li>
 <li>Enhanced problem-solving skills through hands-on experience with real-world scenarios, enabling the development of scalable architectures using microservices and modern frameworks.</li>
  </ul>
</div>
</div>


*/