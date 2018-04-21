import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthPage from './views/auth';

class App extends Component {
  render() {
    return (
        <div className="app">
            <Switch>
                <Route path='/panel' component={AuthPage}/>
                <Route path='/auth/login' component={AuthPage}/>
                <Route path='/auth/signup' component={AuthPage}/>
            </Switch>
        </div>
    );
  }
}

export default App;
