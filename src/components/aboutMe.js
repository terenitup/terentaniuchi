import React, { Component } from 'react';
import img from './teren.jpg';


export default class AboutMe extends Component {
//   constructor() {
//     super()
//   }

  render() {
    return (
      <div>
        <div className="aboutMe_landing">
          
          <div className="aboutMe_heading">
            ABOUT ME
            <div className="aboutMe_text">
              Creative thinker with a keen eye for aesthetics with experience designing 
              web and print applications. Analytically minded with significant data analysis/manipulation experience and a love for coding.
            </div>
            
            <div className='aboutMe_text'>
              Dedicated professional with experience 
              assisting companies to make connections 
              that led to deals with international clients. Works well with people of diverse 
              backgrounds and enjoys collaborating 
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