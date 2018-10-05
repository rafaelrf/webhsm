//import { getJSON } from '../../util/metodos'

/*export function datainicioChanged(e) {
    return { type: 'DATAINICIO_CHANGED_EXAME', payload: e.target.value }
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