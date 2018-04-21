import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import './index.scss';
import App from './App';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
);
registerServiceWorker();
