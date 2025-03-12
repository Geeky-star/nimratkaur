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
                        Hi there👋, I am
                        <p style={{ margin: '0', fontSize: '3rem', color: '#208CCC', fontWeight: 'bolder' }}>Nimratpreet Kaur</p>
                    </span>
                    <span className='experience-description'>
                      <p>
                      I am a Software Developer passionate about building clean, accessible and responsive applications. I thrive in working collaboratively in intensive, fast-paced, and pressurized environments.
                      
                      </p>
                       
                        <p>
                        When I'm not actively coding or debugging in my dreams, you'll find me walking with music on!🎧, at the gym 🏋️‍♀️, or watching k-dramas!
                       
                        </p>
               </span>
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
                    <a className='social-links' href="mailto:nimratofficial.engineer@gmail.com" target="_blank" rel="noopener noreferrer">
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
