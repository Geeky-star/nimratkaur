import './Experience.css';
import drdo from '../assets/drdo.jpg';
import ericsson from '../assets/Ericsson.png';

function Experience() {
    return (
        <div className="experience-section" id="experience">
            <span className="experience-s-heading">Work Experience</span>
            <div className="experience-container">
                {/* Ericsson Experience */}
                <div className="experience-item">
                    <div className="vertical-timeline-element-content bounce-in">
                        <div className="vertical-timeline-element-content-arrow"></div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img alt="" src={ericsson} style={{ height: '50px', width: '50px' }} />
                            <div style={{ display: 'flex', alignItems: 'baseline', flexDirection: 'column' }}>
                                <p className="experience-designation" style={{ margin: '0' }}>
                                    Ericsson (February 2020 - November 2023)
                                </p>
                                <h3 className="experience-heading" style={{ margin: '0px' }}>Software Developer</h3>
                            </div>
                        </div>
                        <p className="e-experience-description">
                        Migrated legacy VanillaJS codebase to ReactJS with a modular architecture, improving readability and application performance by 40% through innovative design and implementation.
Actively participated in task analysis & code review sessions, enhancing team efficiency and reducing the burndown rate by 15% through effective communication and collaboration.
Identified unused AWS resources, delivering $30,000 in annual cost savings by optimizing resource allocation.
Developed RESTful APIs using Flask & Python, ensuring reliability & security standards, which improved system robustness by 80%.

                        </p>
                    </div>
                </div>

                {/* DRDO Experience */}
                <div className="experience-item">
                    <div className="vertical-timeline-element-content bounce-in-2">
                        <div className="vertical-timeline-element-content-arrow"></div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <img
                                src={drdo}
                                style={{ height: '75px', width: '75px', borderRadius: '50%' }}
                                alt=""
                            />
                            <div style={{ display: 'flex', alignItems: 'baseline', flexDirection: 'column' }}>
                                <p className="experience-designation" style={{ margin: '0' }}>
                                    DRDO, Delhi (May 2021 - August 2021)
                                </p>
                                <h3 className="experience-heading" style={{ margin: '0' }}>Front End Developer</h3>
                            </div>
                        </div>
                        <p className="e-experience-description">
                        Developed a comprehensive Learning Management System (LMS) that facilitated seamless content creation, management, and publishing, increasing user engagement by 20%.
Contributed to improving both developer and user experience by sharing insights on architecture design, code quality, and clear documentation, resulting in a 90% increase in development efficiency.
Enhanced system performance by implementing .NET 6.0 & React, improving application speed and reliability. Collaborated with cross-functional teams to ensure project success, increasing project delivery efficiency.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
