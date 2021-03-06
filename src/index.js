import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'; // From material-ui
import registerServiceWorker from './registerServiceWorker';

import './index.scss';
import App from './App';

import reducers  from './redux/reducers';


injectTapEventPlugin();
let store = createStore(reducers);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('app')
);
registerServiceWorker();
