import authReducer from './auth'
import itemReducer from './item'

import { combineReducers } from 'redux'

const rootReducer = combineReducers ({
    auth : authReducer,
    item : itemReducer
})

export default rootReducer;