import React, { Component } from 'react';
import img from '../images/teren.jpg';


export default class AboutMe extends Component {
  constructor() {
    super()

    this.state = {
      topPage: true,
    }

  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (event) => {
    if (window.scrollY < 405) {
      this.setState({ topPage: true })
      console.log(this.state.topPage, event)
    } else {
      this.setState({ topPage: false })
      console.log(this.state.topPage, event)
    }
  };



  render() {
    
    const dotScrollClass1 = `dot-scroll__item__${this.state.topPage}`
    const dotScrollClass2 = `dot-scroll__item__${this.state.topPage}`

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

          </div>

          <div className='dot-scroll'>
              <ul className='dot-scroll__list'>
                <li className={(this.state.topPage) ? 'dot-scroll__item__selected' : 'dot-scroll__item__normal'}>
                  <a href='#' className='dot-scroll__link'></a>
                </li>
    
                <li className={(this.state.topPage) ? 'dot-scroll__item__normal' : 'dot-scroll__item__selected'}>
                  <a href='#' className='dot-scroll__link'></a>
                </li>
                
              </ul>
          </div>
        
        </div>
      
      </div>
    );
  }
}