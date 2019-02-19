import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {chat_submit, load_history} from '../chat-service.js'

class Chat extends Component {

    constructor(props) {
    super(props);

    this.state = {
        msg: '',
        msgHistory: ''
    };
  }

  componentDidMount () {
        load_history(this.props.id)
        .then(res => (this.setState({
            msgHistory: res.data.msgHistory
          }))
        }


  handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      });
  }


  handleSubmit = (event) => {

      chat_submit(this.props.id, this.state.msg)
      .then(res => this.setState({
            msg: '',
            msgHistory: res.data.msgHistory
          }))
      }
      render() {
          return (
              <div className='chat'>
              <h2 >Chating</h2>
              <textarea className='chat__textfield' value={this.state.msgHistory} readOnly></textarea>
              <input className='chat__input' value={this.state.msg} onChange={this.handleChange} type="text" name='msg'></input>
              <input type="button" value="Отправить" onClick={this.handleSubmit}></input>
              </div>
          )
      }
  }


   Chat.propTypes = {
       id: PropTypes.number
   }


export default Chat;