import React, { Component } from 'react';

export default class Home  extends Component {
//   constructor() {
//     super()
//   }

  render() {
    return (
      <div className="homeContainer layout__contentInset">
        <div className="homeSubContainer">
          <div className="firstTitle">TEREN<br></br>TANIUCHI</div>
          {/* <div className="secondTitle">TANIUCHI</div>  */}

          <p className="subHeading">Full Stack Software Developer & Designer</p>
        </div>
        
      </div>
    );
  }
}

