import './Introduction.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import avatar from '../assets/avatar.png'; // Replace with the correct path
import '../Navbar.css';

export default function Introduction() {
    return (
        <div className="Introduction">
            <div className='intro'>
                <img src={avatar} alt="Nimratpreet Kaur" className='avatar' />
                <div>
                <div className='text-content'>
                    <span className='name'>
                        Hi there, I am
                        <p style={{ margin: '0', fontSize: '3rem', color: '#208CCC', fontWeight: 'bolder' }}>Nimratpreet Kaur</p>
                    </span>
                    <span className='roles'><span>A Software Engineer</span>, <span>Frontend Engineer</span>, <span>Mobile Application Developer</span></span>
                    <span className='experience-description'>I demonstrate strong proficiency in Kotlin, Swift, and front-end technologies. I have utilized my programming skills to develop several mobile applications during my academic journey at George Brown College. I am committed to continuous learning and leveraging the latest technology to build mobile applications with optimal security, I am an excellent team collaborator with strong analytical and problem-solving skills.</span>
               
                </div>
                
            <div className='intro-social'>
                <div className='social-network-each-link'>
                    <a className='social-links' href='https://www.linkedin.com/in/nimratkaur90/' target="_blank" rel="noopener noreferrer">
                        <div className='social-link-img'>
                            <i className="bi bi-linkedin"></i>
                        </div>
                    </a>
                </div>
                <div className='social-network-each-link'>
                    <a className='social-links' href="https://github.com/Geeky-star" target="_blank" rel="noopener noreferrer">
                        <div className='social-link-img'>
                            <i className="bi bi-github"></i>
                        </div>
                    </a>
                </div>
                <div className='social-network-each-link'>
                    <a className='social-links' href="https://x.com/Npk74091070" target="_blank" rel="noopener noreferrer">
                        <div className='social-link-img'>
                            <i className="bi bi-twitter-x"></i>
                        </div>
                    </a>
                </div>
                <div className='social-network-each-link'>
                    <a className='social-links' href="mailto:" target="_blank" rel="noopener noreferrer">
                        <div className='social-link-img'>
                            <i className="bi bi-envelope"></i>
                        </div>
                    </a>
                </div>
            </div>
                </div>
            </div>

        </div>
    );
}
