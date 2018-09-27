import React, { Component } from 'react';
import img from './images/teren.jpg';
import resume from './images/TerenTaniuchi_Resume.001.png';


export default class AboutMe extends Component {
//   constructor() {
//     super()
//   }

  render() {
    return (
      <div>
        <div className="aboutMe_landing layout__content">
          
          <div className="aboutMe">
            <div className="aboutMe_heading">
              ABOUT ME
              <div className="aboutMe-text">
                I am an analytically minded professional with significant data analysis and manipulation experience and a love for coding. 
                I am also a creative thinker with a keen eye for aesthetics with experience designing <br></br> web and print applications.
              </div>
              
              <div className='aboutMe-text-2'>
                I have experience 
                assisting companies make connections internationally, 
                which led to deals amounting in hundreds of thousands of dollars. 
                My background and experiences have helped me learn how to work well with people of diverse 
                backgrounds and collaborate 
                across various disciplines to arrive at 
                unique solutions.
              </div>
            </div>
            
            <img className="profilePic" src={img} alt="Profile Picture of Teren" />
          </div>

          <div className='resume'>

            <div className='resume__title'>
              <a href='https://drive.google.com/file/d/1IqCmcyYOB-75fdidDksMAanAOgCXbmGZ/view?usp=sharing'
                target='_blank'    
              >
              R{ 'É' }SUM{ 'É' }
              </a>
            </div>

            <div className='resume__container'>
              <div className='resume__skills'>
                Skills
              </div>
              <div className='resume__education'>
                Education
              </div>
              <div className='resume__experience'>
                Experience
              </div>
              
            </div>



          </div>
        
        </div>
      
      </div>
    );
  }
}