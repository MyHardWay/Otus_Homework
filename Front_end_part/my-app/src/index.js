import React from "react";
import { render } from "react-dom";
import { Route} from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import MainPage from "./containers/main";
import LoginPage from "./containers/login";
import RegistrationPage from "./containers/registration";



import "./styles.css";


render(
<Router>
    <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/login' component={LoginPage}/>
         <Route path='/registration' component={RegistrationPage}/>
    </Switch>
</Router>,
  document.getElementById("root")
);

