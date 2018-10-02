import { removeLocalStorage,getLocalStorage,setLocalStorageJSON } from '../util/metodos'

const INITIAL_STATE = {
    user: getLocalStorage(),
    validToken: false

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'TOKEN_VALIDATED':
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                removeLocalStorage()
                return { ...state, validToken: false, user: null }
            }

        case 'USER_FETCHED':
            setLocalStorageJSON(JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }

        default:
            return state
    }
}