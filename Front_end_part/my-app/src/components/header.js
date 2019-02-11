import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import Chat from "../containers/chat";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }

    togglePopup() {

        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__item">
                    <a href="/">Courses</a>
                </div>
                <div className="header__item">
                    <a href="/">Job in companys</a>
                </div>
                <div className="header__item">
                    <a href="/">For our partners</a>
                </div>
                <div className="header__item">
                    <a onClick={this.togglePopup.bind(this)}>Chat</a>
                </div>
            </div>
            {this.state.showPopup ?
                 <Popup open={this.state.showPopup}>
                    <Chat />
                  </Popup>
                 : null
            }
    </div>
    )}
}


export default Header;