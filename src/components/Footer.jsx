import './Footer.css';
import './SocialNetwork.css'

export default function Footer(){
    return (
        <div className='footer-section'>
                <span className="footer-section-part-one">
              
              Nimratpreet Kaur
              </span>

               <div className='social-network-section'>
        <div className='social-network-section-two'>
       <div className='social-network-each-link' style={{color: "#d6d6d6"}}>
        <a className='social-links' href="https://github.com/Geeky-star">
        <div className='social-link-img'>
       <img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-github-community-for-software-building-and-testing-online-logo-color-tal-revivo.png" alt="external-github-community-for-software-building-and-testing-online-logo-color-tal-revivo"/>
       
       </div>
        </a>
       
       </div>
       <div className='social-network-each-link' style={{color: "#cce4f0"}}>
        <a className='social-links' href='https://www.linkedin.com/in/nimratkaur90/'>
        <div className='social-link-img'>
        <img width="69" height="69" src="https://img.icons8.com/3d-fluency/94/linkedin.png" alt="linkedin"/>
     </div>
        </a>
       </div>
       <div className='social-network-each-link'>
        <a className='social-links' href="https://x.com/Npk74091070">
        <div className='social-link-img'>
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1"/>
      </div>
        </a>
       </div>
       <div className='social-network-each-link' style={{color: "#cce4f0"}}>
        <a className='social-links' href='https://x.com/Npk74091070'>
        <div className='social-link-img'>
        <img width="69" height="69" src="https://img.icons8.com/color/96/youtube-play.png" alt="youtube-play"/>
       </div>
        </a>
        </div>
       
       </div>
       </div>
       </div>
    );
}
