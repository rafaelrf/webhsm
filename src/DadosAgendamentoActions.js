import { getJSON } from './util/metodos'

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
        dispatch({ type: 'CONVENIO_SELECIONADO_AGENDAMENTO', payload: +e.target.value, payloadplanos: [] })
        getJSON('plano/' + (e.target.value)).then(resp => {
            dispatch({
                type: 'CONVENIO_SELECIONADO_AGENDAMENTO',
                payload: (resp.data.length === 0) ? 0 : +resp.data[0].id_convenio, payloadplanos: resp.data
            })
        })

    }
}

export function selecionaPlano(e) {
    return dispatch => {
        dispatch({ type: 'PLANO_SELECIONADO_AGENDAMENTO', payload: +e.target.value })
        getJSON('especialidade').then(resp => {
            dispatch({
                type: 'CARREGAR_ESPECIALIDADE_AGENDAMENTO', payload: resp.data
            })
        })
    }
}

export function selecionaEspecialidade(e) {
    return dispatch => {
        dispatch({ type: 'ESPECIALIDADE_SELECIONADA_AGENDAMENTO', payload: +e.target.value })
        getJSON('medico/'+(e.target.value)).then(resp => {
            dispatch({
                type: 'CARREGAR_MEDICO_AGENDAMENTO', payload: resp.data
            })
        })
    }
}

export function selecionaMedico(e) {
    //return { type: 'MEDICO_SELECIONADO_AGENDAMENTO', payload: +e.target.value }
    return dispatch => {
        dispatch({ type: 'MEDICO_SELECIONADO_AGENDAMENTO', payload: +e.target.value })
        getJSON('agenda/NTctMTYvMTAvMjAxOC0yNg==').then(resp => {
            console.log(resp.data);
            dispatch({
                type: 'CARREGAR_AGENDA_MEDICO', payload: resp.data
            })
        })
    }
}

export function declaraEstarCiente(value) {
    return { type: 'CHECKBOX_DECLARA_CIENTE_AGENDAMENTO', payload: !value }
}

export function escolhendoDataConsulta(data) {
    return { type: 'ESCONHEDO_DATA_CONSULTA', payload: data }
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


/*
export function actionFormAgendamento(event, props) {
    event.preventDefault();
console.log(event);
    if (props.idconvenio === 0) {
        toastr.error('Atenção', "Informe o Convênio!");
        return { type: '' };
    } else if (props.idplanoconvenio === 0 ) {
        toastr.error('Atenção', "Informe o Plano!");
        return { type: '' };
    } else if (props.idespecialidade === 0) {
        toastr.error('Atenção', "Informe a Especialidade!");
        return { type: '' };
    } else if (props.idmedico === 0) {
        toastr.error('Atenção', "Informe o Médico!");
        return { type: '' };
    }

    return {type: 'ACTION_FORM_AGENDAMENTO'}
}*/

/*
export function carregaSolicitacaoExames(event, props) {
    event.preventDefault();
    let query = querySolicitacoesExames(props.datainicio, props.datafim, props.idConvenio);
    let sendData = { "query": query }

    return dispatch => {
        dispatch({ type: 'CARREGAR_SOL_EXAMES', payload: [], animacaocarregamento: true })
        getJSON('generic', sendData).then(resp => {
            dispatch({
                type: 'CARREGAR_SOL_EXAMES', payload: resp.data, animacaocarregamento: false
            })
        })

    }
}
*/