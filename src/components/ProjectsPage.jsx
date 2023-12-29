import dreambnb from './dreambnb.png';
import inventory from './inventory.png';
import gsrimmi from './gsrimmi.png';
import birthday from './birthday.png';
import todo from './todo.png';

function ProjectsPage(){
    return(
        <div>
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

            <div className='single-project'>
            <a href='https://github.com/Geeky-star/birthday_reminder_app'>
            <div className='img-section'>
               <img src={birthday} alt=''></img>
            </div>
                <span className='project-title'>
                    Birthday Reminder App
                </span>
            </a>
            </div>

            <div className='single-project'>
            <a href='https://github.com/Geeky-star/todo_app'>
            <div className='img-section'>
               <img src={todo} alt=''></img>
            </div>
                <span className='project-title'>
                    Todo App
                </span>
            </a>
            </div>
            
        </div>
     </div>

    </div>
    )
}

export default ProjectsPage;