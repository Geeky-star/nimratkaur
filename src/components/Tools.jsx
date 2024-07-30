import './Tools.css';
import react from './react.png';
import javascript from './javascript.png';
import nodejs from './nodejs.png';
import python from './python.png';
import express from './express.png';
import vuejs from './vuejs.png';
import git from "./git.png";
import bootstrap from "./bootstrap.png"
import flutter from "./flutter.png";
import mongodb from "./mongodb.png";
import kotlin from "../assets/kotlin.png";
import swift from "../assets/swift.png"
import adobe from "../assets/adobe.png";
import jira from "../assets/jira.png";
import nextjs from "../assets/nextjs.png";

function Tools(){
    const skills = [{"skill":"Swift","image":swift},{"skill":"Kotlin","image":kotlin},{"skill":"React","image":react},{"skill":"Next.js","image":nextjs},{"skill":"JavaScript","image":javascript},{"skill":"Node.js","image":nodejs},{"skill":"Python","image":python},{"skill":"Express","image":express},{"skill":"VueJS","image":vuejs},{"skill":"Mongo DB","image":mongodb}, {"skill":"Git","image":git},{"skill":"Bootstrap","image":bootstrap},{"skill":"Flutter","image":flutter},{"skill":"Adobe","image":adobe},{"skill":"Jira","image":jira}]
   return(
    <div className="tools-section">  
        <span className='tools-heading'>
                My SKILLS
        </span>
    <div className='skills'>
    {skills.map(tool=> (        
            <div className='box-content'>    
               <div className='box-icon'>
               <img src={tool.image} alt={tool.skill}/>
               {tool.skill}
               </div>
                </div>
    ))}
    </div>
   </div>
   );
}

export default Tools;