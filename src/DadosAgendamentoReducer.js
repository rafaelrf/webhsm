//import moment from 'moment';

const INITIAL_STATE = {
    convenios: [],
    idconvenio: 0,
    medicos: [],
    medico: null,
    idmedico: 0,
    especialidades: [],
    idespecialidade: 0,
    planoconvenios: [],
    idplanoconvenio: 0,
    checkboxDeclaraCiente: false,
    dataAgendamento: new Date(),
    nomePaciente: "",
    cpfPaciente: "",
    fonePaciente: ""
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
            return { ...state, idmedico: action.payload,
                medico: state.medicos.filter((medico) => (medico.id_medico === action.payload))[0] }
        case 'CHECKBOX_DECLARA_CIENTE_AGENDAMENTO':
            return { ...state, checkboxDeclaraCiente: action.payload }
        case 'ESCONHEDO_DATA_AGENDAMENTO':
            return { ...state, dataAgendamento: action.payload }            
        case 'NOME_PACIENTE_CHANGE':
            return { ...state, nomePaciente: action.payload }            
        case 'CPF_PACIENTE_CHANGE':
            return { ...state, cpfPaciente: action.payload }            
        case 'FONE_PACIENTE_CHANGE':
            return { ...state, fonePaciente: action.payload }                        
        default:
            return state
    }
}