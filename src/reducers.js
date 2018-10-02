import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import AuthReducer from './auth/authReducer'
import RepassesContadorReducer from '../src/views/contador/repassesContadorReducer'

const rootReducer = combineReducers({
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer,
    repassesContadorReducer: RepassesContadorReducer
})

export default rootReducer