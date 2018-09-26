import React, { Component } from 'react';
import madlibs from './images/madlibs.png';
import birthdayCountdown from './images/birthdayCountdown.png';

export default class Portfolio extends Component {
//   constructor() {
//     super()
//   }

  render() {
    return (

      <div className='portfolio__container layout__content'>
        <div className='portfolio'>
          <div className='madlibs'>
            <div className='madlibs__text'>
              Mad Libs App
            </div>
            
            <div className='madlibs__thumbnail'>
              <a className='madlibs__link' 
                href='https://madlibs-game.herokuapp.com/'
                target='_blank'  
              >
                <img className='madlibs__img' 
                  src={madlibs} 
                  alt='Thumbnail of the madlibs app page' 
                />
              </a>
            </div>
          </div>

          <div className='birthdayCountdown'>
            <div className='birthdayCountdown__text1'>
              Birthday
            </div>
            <div className='birthdayCountdown__text'>
              Countdown App
            </div>
            
            <div className='birthdayCountdown__thumbnail'>
              <a className='birthdayCountdown__link' 
                href='https://countbirthday.herokuapp.com/'
                target='_blank'  
              >
                <img className='birthdayCountdown__img' 
                  src={birthdayCountdown} 
                  alt='Thumbnail of the birthday countdown app page' 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      
    );
  }
}