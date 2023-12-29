import './SocialNetwork.css';

function SocialNetwork(){
    return (
        <div className='social-network-section'>
           <span className="social-heading">CONNECT WITH ME</span>
       <div className='social-network-section-two'>
       <div className='social-network-each-link' style={{backgroundColor: "#333",color: "#d6d6d6"}}>
        <a className='social-links' href="https://github.com/Geeky-star">Github</a>
       <div className='social-link-img'>
       <img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-github-community-for-software-building-and-testing-online-logo-color-tal-revivo.png" alt="external-github-community-for-software-building-and-testing-online-logo-color-tal-revivo"/>
       
       </div>
       </div>
       <div className='social-network-each-link' style={{backgroundColor:"#0077b5",color: "#cce4f0"}}>
        <a className='social-links' href='https://www.linkedin.com/in/nimratkaur90/'>LinkedIn</a>
        <img width="69" height="69" src="https://img.icons8.com/3d-fluency/94/linkedin.png" alt="linkedin"/>
       </div>
       <div className='social-network-each-link'>
        <a className='social-links' href="https://twitter.com/Npk74091070">Twitter</a>
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1"/>
       </div>
       <div className='social-network-each-link' style={{backgroundColor:"#0077b5",color: "#cce4f0"}}>
        <a className='social-links' href='/'>Youtube</a>
        <img width="69" height="69" src="https://img.icons8.com/color/96/youtube-play.png" alt="youtube-play"/>
       </div>
       
       </div>
        </div>
    );
}

export default SocialNetwork;