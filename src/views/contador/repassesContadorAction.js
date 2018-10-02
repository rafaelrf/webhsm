import { toastr } from 'react-redux-toastr'
import { getJSON, getLocalStorageParam } from '../../util/metodos'

export function listaEmpresas() {
    return (dispatch, getState) => {
        let sendData = { "idContador": getLocalStorageParam("idContador") }
        getJSON('empresa', sendData).then(resp => {
            dispatch([{ type: 'RED_LIST_EMPRESAS', payload: resp.data['empresa'] }, { type: 'RED_STOP_LOADING' }])
        })
    }
}

export function changeEmpresa(e) {
    return [{ type: 'RED_CHANGE_TIPOREL', payload: 1 }
        , { type: 'RED_CHANGE_MEDICO', payload: 0 }
        , { type: 'RED_CHANGE_EMPRESA', payload: e.target.value }
        , listaRelatorio()]
}

export function changeMedico(e) {
    return [{ type: 'RED_CHANGE_MEDICO', payload: e.target.value }, listaRelatorio()]
}

export function changeRel(e) {
    return [{ type: 'RED_CHANGE_REL', payload: e.target.value }]
}

export function escolheRelatorio(e) {
    return (dispatch, getState) => {
        dispatch([{ type: 'RED_CHANGE_TIPOREL', payload: (e === null || e.target.id === "tp1" ? 1 : 2) }, listaRelatorio()])
    }
}

export function listaRelatorio() {
    return (dispatch, getState) => {
        const state = getState()["repassesContadorReducer"]

        if (state.idEmpresa === "" || state.idEmpresa === "0") {
            return
        }

        dispatch({ type: 'RED_LIST_RELATORIOS_LIMPAR' })
        dispatch({ type: 'RED_START_LOADING' })
        dispatch({ type: 'RED_CHANGE_REL', payload: "" })

        if (state.idEmpresa !== "" && state.idEmpresa !== "0") {
            let sendData = { "idMedico": state.idMedico, "idEmpresa": state.idEmpresa, "tipo": state.tipo }
            getJSON('repasse', sendData).then(resp => {

                if (resp.data['repasse'].length === 0)
                    toastr.info('Atenção', "Não foi encontrado repasses!")

                dispatch([{ type: 'RED_LIST_RELATORIOS', payload: resp.data['repasse'] }, { type: 'RED_STOP_LOADING' }])
                if (resp.data['repasse'].length > 0)
                    dispatch({ type: 'RED_CHANGE_REL', payload: resp.data['repasse'][0].url })
            })
        }
    }
}