import { getJSON } from './util/metodos'
import moment from 'moment'

export function carregaConvenios() {
    return dispatch => {
        dispatch({ type: 'CARREGAR_CONVENIOS_AGENDAMENTO', payload: [] })
        getJSON('convenio').then(resp => {
            dispatch({
                type: 'CARREGAR_CONVENIOS_AGENDAMENTO', payload: resp.data
            })
        })

    }
}

export function selecionaConvenio(e) {
    return dispatch => {
        dispatch({ type: 'CONVENIO_SELECIONADO_AGENDAMENTO', payload: +e.target.value})
        getJSON('plano/' + (e.target.value)).then(resp => {
            dispatch({
                type: 'CARREGAR_PLANO_AGENDAMENTO',
                payload:  resp.data
            })
        })

    }
}

export function selecionaPlano(e,id_convenio) {

    return dispatch => {
        dispatch({ type: 'PLANO_SELECIONADO_AGENDAMENTO', payload: +e.target.value })
        getJSON('especialidade/' + id_convenio).then(resp => {
            dispatch({
                type: 'CARREGAR_ESPECIALIDADE_AGENDAMENTO', payload: resp.data
            })
        })
    }
}

export function selecionaEspecialidade(e,id_convenio) {
  let parametro = e.target.value+"-"+id_convenio

    return dispatch => {
        dispatch({ type: 'ESPECIALIDADE_SELECIONADA_AGENDAMENTO', payload: +e.target.value })
        getJSON('medico/' + window.btoa(parametro)).then(resp => {
            dispatch({
                type: 'CARREGAR_MEDICO_AGENDAMENTO', payload: resp.data
            })
        })
    }
}

export function selecionaMedico(e) {
    return dispatch => {
        dispatch({ type: 'MEDICO_SELECIONADO_AGENDAMENTO', payload: +e.target.value })
        /*getJSON('agenda/'+window.btoa('57-16/10/2018-26')).then(resp => {
            dispatch({
                type: 'CARREGAR_AGENDA_MEDICO', payload: resp.data
            })
        })*/
    }
}

export function confirmarAgendamento(e,dados) {
  let parametro = dados.fonePaciente+"-"+dados.nomePaciente+"-"+moment(dados.dataConsulta).format("DD/MM/YYYY HH:mm")
  e.preventDefault();
  window.location.reload();
    return dispatch => {
        dispatch({ type: 'CONFIRMAR_AGENDAMENTO', payload: +e.target.value })
        getJSON('consulta/' + window.btoa(parametro)).then(resp => {
         })
    }
}

export function declaraEstarCiente(value) {
    return { type: 'CHECKBOX_DECLARA_CIENTE_AGENDAMENTO', payload: !value }
}

export function escolhendoDataConsulta(data, convenio, medico) {
    let parametro = medico.id_medico+"-"+moment(data).format("DD/MM/YYYY")+"-"+convenio.id_convenio

    return dispatch => {
        dispatch({ type: 'ESCONHEDO_DATA_CONSULTA', payload: data })
        getJSON('agenda/'+window.btoa(parametro)).then(resp => {
            dispatch({
                type: 'CARREGAR_AGENDA_MEDICO', payload: resp.data
            })
        })
    }
}

export function selecionaHorarioAgenda(horario) {
    return { type: 'HORARIO_SELECIONADO_AGENDAMENTO', payload: horario }
}

export function nomePacienteChange(e) {
    return { type: 'NOME_PACIENTE_CHANGE', payload: e.target.value }
}

export function cpfPacienteChange(e) {
    return { type: 'CPF_PACIENTE_CHANGE', payload: e.target.value }
}

export function fonePacienteChange(e) {
    return { type: 'FONE_PACIENTE_CHANGE', payload: e.target.value }
}
