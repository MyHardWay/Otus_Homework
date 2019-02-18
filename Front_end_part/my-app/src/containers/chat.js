import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {chat_submit, load_history} from '../chat-service.js'

class Chat extends Component {

    constructor(props) {
    super(props);

    this.state = {
        msg: '',
    };
  }

  componentDidMount () {
        load_history(this.props.id)
        .then(res => (this.props.history = res.data.history))
        }


  handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      });
  }


  handleSubmit = (event) => {

      chat_submit(this.props.id, this.props.msg)
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
              <input type="button" value="Отправить" onClick={this.handleSubmit}></input>
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