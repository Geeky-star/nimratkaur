import './Introduction.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import avatar from '../assets/avatar.png'; 
import '../Navbar.css';
import { useEffect, useState } from 'react';

const roles = ["Event Organizer", "Educator", "Creator", "Learner", "Sunset Lover"];

export default function Introduction() {
    const [currentRole, setCurrentRole] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const currentText = roles[roleIndex];

        // Adjust typing and deleting speed
        const typingSpeed = isDeleting ? 50 : 100;

        const handleTyping = () => {
            if (isDeleting) {
                setCurrentRole((prev) => prev.slice(0, -1));
                if (currentRole === "") {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            } else {
                setCurrentRole((prev) => currentText.slice(0, prev.length + 1));
                if (currentRole === currentText) {
                    setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
                }
            }
        };

        const timeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentRole, isDeleting, roleIndex]);

    return (
        <div className="Introduction">
            <div className="textContainer">
                <h1 style={{ fontSize: '130px', marginTop: '15%', marginBottom: "auto" }}>
                    Nimrat Preet Kaur
                </h1>
                <h2 className="typeContainer">
                    <span className="text firstText">Web Developer & &nbsp;</span>
                    <span className="sr-only"></span>
                    <span className="text secondText chrome" aria-hidden="true">
                        {currentRole}
                    </span>
                </h2>
            </div>
            <div className="about-section">
                <span>
                    <h2>About me</h2>
                </span>
                <div className="intro">
                    <img src={avatar} alt="Nimratpreet Kaur" className="avatar" />
                    <div>
                        <div className="text-content">
                            <span className="experience-description">
                                <p>
                                    Hi there👋, I am Nimrat!, a Software Developer passionate about building clean, accessible, and responsive applications. I thrive in working collaboratively in intensive, fast-paced, and pressurized environments.
                                </p>
                                <p>
                                    When I'm not actively coding or debugging in my dreams, you'll find me walking with music on!🎧, at the gym 🏋️‍♀️, or watching k-dramas!
                                </p>
                            </span>
                        </div>
                        <div className="intro-social">
                            <div className="social-network-each-link">
                                <a className="social-links" href="https://github.com/Geeky-star" target="_blank" rel="noopener noreferrer">
                                    <div className="social-link-img">
                                        <i className="bi bi-linkedin"></i>
                                    </div>
                                </a>
                            </div>
                            <div className="social-network-each-link">
                                <a className="social-links" href="https://github.com/Geeky-star" target="_blank" rel="noopener noreferrer">
                                    <div className="social-link-img">
                                        <i className="bi bi-github"></i>
                                    </div>
                                </a>
                            </div>
                            <div className="social-network-each-link">
                                <a className="social-links" href="https://github.com/Geeky-star" target="_blank" rel="noopener noreferrer">
                                    <div className="social-link-img">
                                        <i className="bi bi-twitter-x"></i>
                                    </div>
                                </a>
                            </div>
                            <div className="social-network-each-link">
                                <a className="social-links" href="mailto:nimratofficial.engineer@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <div className="social-link-img">
                                        <i className="bi bi-envelope"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
