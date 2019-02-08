import React, { Component } from 'react';

class LoginPage extends Component {

    constructor(props) {
    super(props);

    this.state = {
        username: "",
        password: ""
    };
  }


  handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      });
  }



  handleSubmit = (event) => {
      fetch('http://127.0.0.1:4000/login/', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        { 'login': this.state.username, 'password': this.state.password }) })
      .then(res => console.log(res))
  }




  render() {
      return (
          <div className="authorization-background">
              <div className="authorization-background__form login-form">
                  <h2>Login</h2>
                  <div className="authorization-background__input-field">
                     <span>Login</span>
                     <input value={this.state.username} onChange={this.handleChange} type="text" name='username'></input>
                  </div>
                  <div className="authorization-background__input-field">
                      <span>Password</span>
                     <input value={this.state.password} onChange={this.handleChange} type="password" name='password'></input>
                  </div>
                  <input className="authorization-background__button" type="button" value="Login" onClick={this.handleSubmit}></input>
              </div>
          </div>
      )
  }}


export default LoginPage;