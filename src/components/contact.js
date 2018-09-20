import React, { Component } from "react";

// class Contact extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//           <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }




export default class Contact extends Component {
  // First
  // constructor() {
  //   super();
  //   this.state = {
  //       pageTitle: "Contact"
  //   };
  //   console.log("constructor");
  // }

  // // Second
  // static getDerivedStateFromProps() {
  //   console.log("getDerivedStateFromProps");
  // }

  // // Fourth
  // componentDidMount() {
  //   console.log("componentDidMount");
  // }

  // // Fith (after update)
  // shouldComponentUpdate() {
  //   console.log("shouldComponentUpdate");
  //   return true;
  // }

  // // Seventh (after update)
  // getSnapshotBeforeUpdate() {
  //   console.log("getSnapshotBeforeUpdate");
  //   return true;
  // }

  // // Eighth (after update)
  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }

  // // Last
  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }

  // handleClick = () => {
  //   console.log("button clicked");
  //   this.setState({ pageTitle: "Contact" });
  // };

  // handleKeyUp = e => {
  //   this.setState({ inputDetails: e.target.value });
  // };

  // // Third
  // // Sixth (after update)
  // render() {
  //   console.log("render");
  render() {
    return (
      <div>
        <h1>CONTACT</h1>

        <input type="text" onKeyUp={e => this.handleKeyUp(e)} />
        <button onClick={this.handleClick}>SUBMIT</button>
      </div>
    );
  } 
}
