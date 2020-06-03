import { combineReducers } from 'redux';
import authReducer from './auth';
import itemReducer from './item';

const rootReducer = combineReducers({
    auth: authReducer,
    item: itemReducer,
});

export default rootReducer;
