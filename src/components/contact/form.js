import React, { Component } from 'react';

class Form extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    }

    handleChange = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        console.log(this.state)
        
    }

  render() {
    return (
      <form>
            <input
                className='firstName' 
                name='firstName'
                placeholder='First Name' 
                value={this.state.firstName} 
                onChange={e => this.handleChange(e)} 
            />
            <input 
                className='lastName'
                name='lastName'
                placeholder='Last Name' 
                value={this.state.lastName} 
                onChange={e => this.handleChange(e)} 
            />
            <input
                className='email' 
                name='email'
                placeholder='Email' 
                value={this.state.email} 
                onChange={e => this.handleChange(e)} 
            />
            <input 
                className='phoneNumber'
                name='phoneNumber'
                placeholder='Phone Number' 
                value={this.state.phoneNumber} 
                onChange={e => this.handleChange(e)} 
            />
            <input 
                className='message'
                name='message'
                placeholder='Message' 
                value={this.state.message} 
                onChange={e => this.handleChange(e)} 
            />

            <button onClick={e => this.onSubmit(e)}>Submit</button>

      </form>
        
    );
  }
}

export default Form;