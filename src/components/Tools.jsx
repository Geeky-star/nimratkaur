import './Tools.css';
import react from './react.png';
import javascript from './javascript.png';
import nodejs from './nodejs.png';
import python from './python.png';
import express from './express.png';
import vuejs from './vuejs.png';
import git from "./git.png";
import bootstrap from "./bootstrap.png";
import flutter from "./flutter.png";
import mongodb from "./mongodb.png";
import kotlin from "../assets/kotlin.png";
import swift from "../assets/swift.png";
import adobe from "../assets/adobe.png";
import jira from "../assets/jira.png";
import nextjs from "../assets/nextjs.png";
import java from "../assets/java.png";
import coffeescript from "../assets/coffeescript.png";
import kalilinux from "../assets/kalilinux.jpg";
import postman from "../assets/postman.jpg";
import ionic from "../assets/ionic.png";

function Tools() {
  const skills = [
    { category: 'Programming Languages', skills: [{ skill: 'JavaScript', image: javascript }, { skill: 'Python', image: python }, { skill: 'Swift', image: swift }, { skill: 'Kotlin', image: kotlin },{ skill: 'Java', image: java },{ skill: 'CoffeeScript', image: coffeescript }] },
    { category: 'Web Development Frameworks', skills: [{ skill: 'React', image: react }, { skill: 'Next.js', image: nextjs }, { skill: 'Node.js', image: nodejs }, { skill: 'Express', image: express }, { skill: 'VueJS', image: vuejs }, { skill: 'Bootstrap', image: bootstrap }] },
    { category: 'Mobile Frameworks', skills: [{ skill: 'Flutter', image: flutter },{ skill: 'ReactNative', image: react },{ skill: 'Ionic', image: ionic }] },
    { category: 'Other Tools', skills: [{ skill: 'MongoDB', image: mongodb }, { skill: 'Git', image: git }, { skill: 'Adobe', image: adobe }, { skill: 'Jira', image: jira },{ skill: 'Linux', image: kalilinux },{ skill: 'Postman', image: postman }] },
  ];

  return (
    <div className="tools-section">
      <span className='tools-heading'>My SKILLS</span>
      {skills.map((category, index) => (
        <div key={index} className='skills-category'>
          <h3 className='category-title'>{category.category}</h3>
          <div className='skills'>
            {category.skills.map((tool, idx) => (
              <div key={idx} className='box-content'>
                <div className='box-icon'>
                  <img src={tool.image} alt={tool.skill} />
                  <span style={{color:'black'}}>{tool.skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tools;
