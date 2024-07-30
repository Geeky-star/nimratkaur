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
                    <span className='roles'><span>A Software Engineer</span>, <span>Frontend Engineer</span>, <span>JavaScript Developer</span></span>
                    <span className='experience-description'>I am a Software Engineer with 2+ years of experience, recognized as a practical and effective developer delivering significant impact on projects. Experienced in collaborating with teams and working under pressure to deliver features within deadlines.</span>
               
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
                    <a className='social-links' href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <div className='social-link-img'>
                            <i className="bi bi-twitter"></i>
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
