import './Experience.css';
import drdo from '../assets/drdo.jpg';
import ericsson from '../assets/Ericsson.png';
import coolage from '../assets/coolage.png'
function Experience(){
    return (
        <div className="experience-section" id='experience'>
            <span className='experience-s-heading'>Work Experience</span>

            <div className='vertical-timeline vertical-timeline--animate vertical-timeline--two-columns'>
                <div className='vertical-timeline-element'>
                <div id="" class="vertical-timeline-element">
                    <span class="vertical-timeline-element-icon bounce-in" style={{'border':'2px solid black','borderRadius':'50%','backgroundColor':'white','color':'black','padding':'5px'}}>
                        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 7C17 5.34315 15.6569 4 14 4H10C8.34315 4 7 5.34315 7 7H6C4.34315 7 3 8.34315 3 10V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H17ZM14 6H10C9.44772 6 9 6.44772 9 7H15C15 6.44772 14.5523 6 14 6ZM6 9H18C18.5523 9 19 9.44772 19 10V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V10C5 9.44772 5.44772 9 6 9Z" fill="currentColor">
                                </path>
                                </svg>
                                </span>
                                <div class="vertical-timeline-element-content bounce-in">
                                    <div class="vertical-timeline-element-content-arrow"></div>
                                    <div style={{'display':'flex','alignItems':'center'}}>
                                        <img alt='' src={ericsson} style={{'height':'50px','width':'50px'}}></img>
                                        <div style={{display:'flex',alignItems:'baseline',flexDirection:'column'}}>
                                        <p class="experience-designation" style={{margin:'0'}}>
                                    Ericsson</p>
                                    <h3 class="experience-heading" style={{margin:'0px'}}>Software Developer</h3>
                                        </div>
                                    </div>
                                    
                                    <p class="e-experience-description">
                                    Built Ericsson’s Root Cause Analyzer. It analyses the root cause of worst performing cells & nodes of the network.
ERCA is an internal web application, to provide solutions for issues by maintaining a set of rules for each cell.
Built frontend features, performed end-to-end testing, and deployed on internal production pipeline

                                        </p>
                                        <span class="vertical-timeline-element-date">February 2022 - August 2023</span>
                                        </div>
                                        </div>
                </div>
{
    /*
    experience second
    */
}
<div className='vertical-timeline-element' id="experience-2">
<span class="vertical-timeline-element-date-2" >May 2021 - August 2021</span>
<span  class="vertical-timeline-element-icon bounce-in-2" style={{'border':'2px solid black','borderRadius':'50%','backgroundColor':'white','color':'black','padding':'5px','marginLeft':'-130px'}}>
                        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 7C17 5.34315 15.6569 4 14 4H10C8.34315 4 7 5.34315 7 7H6C4.34315 7 3 8.34315 3 10V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H17ZM14 6H10C9.44772 6 9 6.44772 9 7H15C15 6.44772 14.5523 6 14 6ZM6 9H18C18.5523 9 19 9.44772 19 10V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V10C5 9.44772 5.44772 9 6 9Z" fill="currentColor">
                                </path>
                                </svg>
                                </span>
                                       
                <div  class="vertical-timeline-element" id="experience-2">
                  
                                <div class="vertical-timeline-element-content bounce-in-2" id="experience-2">
                                    <div class="vertical-timeline-element-content-arrow" id="experience-2"></div>
                                   <div style={{'display':'flex','alignItems':'center',gap:'15px'}}>
<img src={drdo} style={{'height':'75px','width':'75px',borderRadius:'50%'}} alt=''></img>
<div style={{display:'flex',alignItems:'baseline',flexDirection:'column'}} >
<p class="experience-designation" style={{margin:'0'}}>
DRDO, Delhi</p>
<h3 class="experience-heading" style={{margin:'0'}}>Research Intern</h3>
                                   
</div>
                                   </div>
                                    
                                    <p class="e-experience-description">
                                    Researched “PRESENT Block Cipher” and built a deciphering mechanism using artificial neural networks.
Developed a Sequential model for predicting bits of plain text at specific positions from cipher text.

                                        </p>
                                        </div>
                                        </div>
                </div>


{
    /*
    experience third
    */
}
                <div className='vertical-timeline-element'>
                <div id="" class="vertical-timeline-element">
                    <span  class="vertical-timeline-element-icon bounce-in" style={{'border':'2px solid black','borderRadius':'50%','backgroundColor':'white','color':'black','padding':'5px'}}>
                        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 7C17 5.34315 15.6569 4 14 4H10C8.34315 4 7 5.34315 7 7H6C4.34315 7 3 8.34315 3 10V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H17ZM14 6H10C9.44772 6 9 6.44772 9 7H15C15 6.44772 14.5523 6 14 6ZM6 9H18C18.5523 9 19 9.44772 19 10V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V10C5 9.44772 5.44772 9 6 9Z" fill="currentColor">
                                </path>
                                </svg>
                                </span>
                                <div class="vertical-timeline-element-content bounce-in">
                                    <div class="vertical-timeline-element-content-arrow"></div>
                               <div style={{'display':'flex','alignItems':'center',gap:'15px'}}>
                                <img alt='' src={coolage} style={{'height':'75px','width':'105px',borderRadius:'70%'}}></img>
                                <div style={{display:'flex',alignItems:'baseline',flexDirection:'column'}}>
                                <p class="experience-designation" style={{margin:'0'}}>
                                    Coolage
                                    </p>
                                <h3 class="experience-heading" style={{margin:'0'}}>Web Developer</h3>
                                 
                                </div>
                               </div>
                                    
                                    <p class="e-experience-description">
                                    Worked on website of Coolage startup using HTML, CSS, and JavaScript. 
                                        </p>
                                        <span class="vertical-timeline-element-date">May 2020 - June 2020</span>
                                        </div>
                                        </div>
                </div>
            </div>

            
        </div>
    )
}

export default Experience;