import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './login';
import SignupPage from './signup';

export default class AuthPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="authenticate">
                <Switch>
                    <Route path='/auth/login' component={LoginPage}/>
                    <Route path='/auth/signup' component={SignupPage}/>
                </Switch>
            </div>
        );
    }
}