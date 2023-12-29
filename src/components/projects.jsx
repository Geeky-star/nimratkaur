import './projects.css';
import dreambnb from './dreambnb.png';
import inventory from './inventory.png';
import gsrimmi from './gsrimmi.png';
import { Link } from 'react-router-dom';

function Project() {
   return (
     <div className='projects-section'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-section'>
            <div className='single-project'>
            <a href="https://github.com/Geeky-star/dreambnb">
            <div className='img-section'>
            <img src={dreambnb} alt='dream'></img>
            </div>
                <span className='project-title'>
                    DreamBnb
                </span>
            </a>
            </div>

            <div className='single-project'>
                <div className='img-section'>
                  <img src={inventory} alt=''></img>
                </div>
                <span className='project-title'>
                    Inventory Manager
                </span>
            </div>

            <div className='single-project'>
            <a href='https://gsrimmigration.com/'>
            <div className='img-section'>
               <img src={gsrimmi} alt=''></img>
            </div>
                <span className='project-title'>
                    GSR Immigration Website
                </span>
            </a>
            </div>
            <Link to='projects' style={{width:"135px"}}>
            <div style={{display:"flex",alignItems:"center",gap:"6px",border:"1px solid green",width:"135px",padding:"5px",borderRadius:"10px"}}>
            <p style={{color:"#14e956",fontWeight:"bold"}}>Show More
            </p>
            <div style={{height:"30px",width:"30px",color:"#14e956"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-1 h-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
            </div>

            </div>
            </Link>
        </div>
     </div>
   ); 
}

export default Project;
