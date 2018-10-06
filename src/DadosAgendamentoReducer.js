//import moment from 'moment';
const INITIAL_STATE = {
    convenios: [],
    idconvenio: 0,
    medicos: [],
    idmedico: 0,
    especialidades: [],
    idespecialidade: 0,
    planoconvenios: [],
    idplanoconvenio: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CARREGAR_CONVENIOS_AGENDAMENTO':
            return { ...state, convenios: action.payload }
        case 'CONVENIO_SELECIONADO_AGENDAMENTO':
            return {
                ...state, idconvenio: action.payload,
                planoconvenios: action.payloadplanos,
                especialidades: action.payloadespecialidade,
                medicos: action.payloadmedicos,
            }
        case 'PLANO_SELECIONADO_AGENDAMENTO':
            return { ...state, idplanoconvenio: action.payload }
        case 'ESPECIALIDADE_SELECIONADA_AGENDAMENTO':
            return { ...state, idespecialidade: action.payload }
        case 'MEDICO_SELECIONADO_AGENDAMENTO':
            return { ...state, idmedico: action.payload }
        default:
            return state
    }
}