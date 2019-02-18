import React from "react";
import { render } from "react-dom";
import { Switch, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import { appStore } from './store/appStore';

import MainPage from "./containers/main";
import LoginPage from "./containers/login";
import RegistrationPage from "./containers/registration";
import CoursesPage from "./containers/courses";
import StatementPage from "./containers/statement";
import LessonsPage from "./containers/lessons";
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';

import "./styles.css";
import {chat_submit} from './chat-service.js'

const store = appStore;

ReactDOM.render(
<Provider store={store}>

        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/registration' component={RegistrationPage}/>
            <Route path='/course' component={CoursesPage}/>
            <Route path='/statement' component={StatementPage}/>
            <Route path='/lessons' component={LessonsPage}/>
        </Switch>

</Provider>,
  document.getElementById("root")
);

