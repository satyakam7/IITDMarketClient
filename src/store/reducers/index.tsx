import { combineReducers } from 'redux';
import authReducer from './auth';
import itemReducer from './item';
import chatReducer from './chat';

const rootReducer = combineReducers({
    auth: authReducer,
    item: itemReducer,
    chat: chatReducer,
});

export default rootReducer;
