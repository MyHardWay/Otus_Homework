import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Chat extends Component {

    constructor(props) {
    super(props);

    this.state = {
        msg: '',
    };
  }

  componentDidMount () {
        fetch('http://127.0.0.1:4000/gethistory/' + this.props.id, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }})
        .then(res => (this.props.history = res.data.history))
        }


  handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      });
  }


  handleSubmit = (event) => {

      fetch('http://127.0.0.1:4000/sendmsg/' + this.props.id, {
      method: 'post',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(
          {
              'msg': this.state.msg
          })})
      .then(res => this.setState({
            msg: ''
          }))
      }
      render() {
          return (
              <div className='chat'>
              <h2 >Chating</h2>
              <button onClick={this.props.closePopup}>close me</button>
              <textarea className='chat__textfield' value={this.props.history} readOnly></textarea>
              <input className='chat__input' value={this.state.msg} onChange={this.handleChange} type="text" name='msg'></input>
              <input className="authorization-background__button" type="button" value="Отправить" onClick={this.handleSubmit}></input>
              </div>
          )
      }
  }

   Chat.defaultProps = {
       history: ''
   };

   Chat.propTypes = {
       id: PropTypes.number
   }


export default Chat;