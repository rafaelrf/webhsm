import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DadosAgendamentoReducer from './DadosAgendamentoReducer'

const rootReducer = combineReducers({
    toastr: toastrReducer,
    dadosAgendamento: DadosAgendamentoReducer
})

export default rootReducer