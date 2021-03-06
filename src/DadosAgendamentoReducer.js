//import moment from 'moment';

const INITIAL_STATE = {
  convenios: [],
  convenio: null,
  idconvenio: 0,
  medicos: [],
  medico: null,
  idmedico: 0,
  especialidades: [],
  especialidade: null,
  idespecialidade: 0,
  planoconvenios: [],
  planoconvenio: null,
  idplanoconvenio: 0,
  agendasmedico: [],
  agendaescolhida: null,
  checkboxDeclaraCiente: false,
  dataConsulta: null,
  dataConsultaFim: null,
  nomePaciente: "",
  cpfPaciente: "",
  fonePaciente: ""
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CARREGAR_CONVENIOS_AGENDAMENTO':
      return {
        ...state,
        convenios: action.payload
      }
    case 'CONVENIO_SELECIONADO_AGENDAMENTO':
      return {
        ...state,
        idconvenio: action.payload,
        convenio: state.convenios.filter((convenio) => (convenio.id_convenio === action.payload))[0],
        agendasmedico: [],
        agendaescolhida: null,
        checkboxDeclaraCiente: false,
        dataConsulta: null,
        dataConsultaFim: null,
        idplanoconvenio: 0,
        planoconvenio: null,
        planoconvenios: [],
        idespecialidade: 0,
        especialidade: null,
        especialidades: [],
        idmedico: 0,
        medico: null,
        medicos: [],
      }
    case 'CARREGAR_PLANO_AGENDAMENTO':
      return {
        ...state,
        planoconvenios: action.payload
      }
    case 'PLANO_SELECIONADO_AGENDAMENTO':
      return {
        ...state,
        idplanoconvenio: action.payload,
        planoconvenio: state.planoconvenios.filter((planoconvenio) => (planoconvenio.id_plano === action.payload))[0],
        agendasmedico: [],
        agendaescolhida: null,
        checkboxDeclaraCiente: false,
        dataConsulta: null,
        dataConsultaFim: null,
        idespecialidade: 0,
        especialidade: null,
        especialidades: [],
        idmedico: 0,
        medico: null,
        medicos: [],
      }
    case 'CARREGAR_ESPECIALIDADE_AGENDAMENTO':
      return {
        ...state,
        especialidades: action.payload
      }
    case 'ESPECIALIDADE_SELECIONADA_AGENDAMENTO':
      return {
        ...state,
        idespecialidade: action.payload,
        especialidade: state.especialidades.filter((especialidade) => (especialidade.id_especialidade === action.payload))[0],
        agendasmedico: [],
        agendaescolhida: null,
        checkboxDeclaraCiente: false,
        dataConsulta: null,
        dataConsultaFim: null,
        idmedico: 0,
        medico: null,
        medicos: [],
      }
    case 'CARREGAR_MEDICO_AGENDAMENTO':
      return {
        ...state,
        medicos: action.payload
      }
    case 'MEDICO_SELECIONADO_AGENDAMENTO':
      return {
        ...state,
        idmedico: action.payload,
        medico: state.medicos.filter((medico) => (medico.id_medico === action.payload))[0],
        agendasmedico: [],
        agendaescolhida: null,
        checkboxDeclaraCiente: false,
        dataConsulta: null,
        dataConsultaFim: null,
      }
    case 'CARREGAR_AGENDA_MEDICO':
      return {
        ...state,
        agendasmedico: action.payload
      }
    case 'CHECKBOX_DECLARA_CIENTE_AGENDAMENTO':
      return { ...state,
        checkboxDeclaraCiente: action.payload
      }
    case 'ESCOLHENDO_DATA_CONSULTA':
      return { ...state,
        dataConsulta: action.payload
      }
    case 'HORARIO_SELECIONADO_AGENDAMENTO':
      return { ...state,
        agendaescolhida: action.payload
      }
    case 'NOME_PACIENTE_CHANGE':
      return { ...state,
        nomePaciente: action.payload
      }
    case 'CPF_PACIENTE_CHANGE':
      return { ...state,
        cpfPaciente: action.payload
      }
    case 'FONE_PACIENTE_CHANGE':
      return { ...state,
        fonePaciente: action.payload
      }
    default:
      return state
  }
}
