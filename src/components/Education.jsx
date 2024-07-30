import './Education.css'
import iiitb from '../assets/iiitb.jpg'
import gbc from '../assets/gbc.jpg'

export default function Education(){
return (
    <div style={{marginTop:'10vh',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'20px'}}>
       <span className='education-s-heading'>My Education</span>
       <div className='education-box'>
       <div className='education-box-item'>
        <img src={gbc} style={{width:'90px'}} alt=''></img>
        <div style={{display:'flex',flexDirection:'column',alignItems:'baseline','width': '-webkit-fill-available'}}>
        <div style={{display:'flex','justifyContent':'space-between',alignItems:'baseline','width': '-webkit-fill-available'}}>
        <span className='education-title'>George Brown College</span>
        <p style={{margin:'0'}}>GPA: 4/4</p>
        </div>
        <p style={{margin:'1px'}}>Mobile Application Development and Strategy</p>
        <p style={{margin:'0px'}}>January 2024 - Present</p>
        </div>
       </div>
        
       </div>
        
       <div className='education-box'>
       <div className='education-box-item'>
        <img src={iiitb} style={{width:'90px'}} alt=''></img>
        <div style={{display:'flex',flexDirection:'column',alignItems:'baseline','width': '-webkit-fill-available'}}>
        <div className='title-gpa'>
        <span className='education-title'>Indian Institute of Information Technology, Bhopal</span>
        <p style={{margin:'0'}}>GPA: 9.1/10</p>
        </div>
        <p style={{margin:'1px'}}>Bachelor of Technology, Information Technology(IT)</p>
        <p style={{margin:'0px'}}>August 2018 - May 2022</p>
        </div>
       </div>
       </div>
      

       </div>
)
}