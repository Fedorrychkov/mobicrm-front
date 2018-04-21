import { combineReducers } from 'redux';
import { token } from './authToken';

const reducers = combineReducers({
    token,
});

export default reducers;