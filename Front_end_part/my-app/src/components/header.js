import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import Chat from '../containers/chat';
import {PopUp} from '../actions/appActions'
import { connect} from 'react-redux'



const mapStateToProps = state => ({
  is_poped: state.is_poped,
});



const mapDispatchToProps = dispatch => ({
    PopUp: is_poped => dispatch(PopUp()),
})



class Header extends Component{

    render(){
    return (
        <div className="header">
            <div className="container">
                <div className="header__item">
                    <a href="/">Students cabinet</a>
                </div>
                <div className="header__item">
                    <a href="/">Teachers cabinet</a>
                </div>
                <div className="header__item">
                    <a href="/">For our partners</a>
                </div>
                <div className="header__item">
                    <a onClick={this.props.PopUp}>Chat</a>
                </div>
            </div>
    </div>
    )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);