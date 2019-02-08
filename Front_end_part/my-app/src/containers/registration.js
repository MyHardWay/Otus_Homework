import React, { Component } from 'react';

class RegistrationPage extends Component {

    constructor(props) {
    super(props);

    this.state = {
        username: '',
        password: '',
        password2: ''
    };
  }


  handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      });
  }


  handleSubmit = (event) => {
    fetch('http://127.0.0.1:4000/register/', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      { 'login': this.state.username, 'password': this.state.password, 'password2': this.state.password2 }) })
    .then(res => console.log(res))
   }



  render() {
      return (
          <div className="authorization-background">
              <div className="authorization-background__form register-form">
                  <h2>Register</h2>
                  <div className="authorization-background__input-field">
                      <span>Login</span>
                      <input value={this.state.username} onChange={this.handleChange} type="password" name='username'></input>
                  </div>
                  <div className="authorization-background__input-field">
                      <span>Password</span>
                      <input value={this.state.password} onChange={this.handleChange} type="password" name='password'></input>
                  </div>
                  <div className="authorization-background__input-field">
                      <span>Repeat Password</span>
                      <input value={this.state.password2} onChange={this.handleChange} type="password" name='password2'></input>
                  </div>
                  <input type="button" className="authorization-background__button" onClick={this.handleSubmit} value='Registrate'></input>
               </div>
          </div>
        )
  }}


export default RegistrationPage;