import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import Chat from '../containers/chat';
import {PopUp} from '../actions/appActions'
import { connect} from 'react-redux'
import { Link } from 'react-router-dom'


const mapDispatchToProps = dispatch => ({
    PopUp: is_poped => dispatch(PopUp(is_poped)),
})



class Header extends Component{


    render(){
    return (
        <div className="header">
            <div className="container">
                <div className="header__item">
                    <Link to="/course">Students cabinet</Link>
                </div>
                <div className="header__item">
                    <Link to="/сourse">Teachers cabinet</Link>
                </div>
                <div className="header__item">
                    <Link to="/">For our partners</Link>
                </div>
                <div className="header__item">
                    <a onClick={this.props.PopUp}>Chat</a>
                </div>
            </div>
    </div>
    )
    }
}

export default connect(null, mapDispatchToProps)(Header);