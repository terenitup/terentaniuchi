import React, { Component } from 'react';
import img from './images/teren.jpg';


export default class AboutMe extends Component {
//   constructor() {
//     super()
//   }

  render() {
    return (
      <div>
        <div className="aboutMe_landing layout__content">
          
          <div className="aboutMe_heading">
            ABOUT ME
            <div className="aboutMe_text">
              I am a creative thinker with a keen eye for aesthetics with experience designing 
              web and print applications. I have an analytical mind with significant data analysis/manipulation experience and a love for coding.
            </div>
            
            <div className='aboutMe_text'>
              I have experience 
              assisting companies make connections internationally, 
              that led to deals amounting in hundreds of thousands of dollars. 
              My background and experience has helped me learn how to work well with people of diverse 
              backgrounds and collaborate 
              across various disciplines to arrive at 
              unique solutions.
            </div>
          </div>
          
          
          <img className="profilePic" src={img} alt="Profile Picture of Teren"/>

          
        </div>
      
      </div>
    );
  }
}