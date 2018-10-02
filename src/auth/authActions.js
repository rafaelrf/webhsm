import { toastr } from 'react-redux-toastr'
import { getJSON } from '../util/metodos'

export function login(values) {
    return submit(values)
}
export function signup(values) {
    return submit(values)
}

function submit(values) {
    return dispatch => {
        getJSON('login' + (values.tipo === "3" ? '/contador' : (values.tipo === "2" ? '/paciente' : '')), values).then(resp => {

            if (resp.data.acao === "0") {
                toastr.error('Erro', "Login/Senha Inválido!")
            } else {
                dispatch([
                    {
                        type: 'USER_FETCHED',
                        payload: {
                            usuario: values.usuario,
                            idMedico: resp.data.idMedico,
                            idPaciente: resp.data.idPaciente,
                            idContador: resp.data.idContador,
                            chapa : resp.data.chapa || "",
                            todasCirurgias: resp.data.todasCirurgias,
                            todosInternados: resp.data.todosInternados,
                            leitos: resp.data.leitos,
                            escalas: resp.data.escalas,
                            indicadores: resp.data.indicadores,
                            profisComConsulta: resp.data.profisComConsulta,
                            profisComEscala: resp.data.profisComEscala,
                            cpdchamado: resp.data.cpdchamado,
                            pesquisa: resp.data.pesquisa,
                            qtdNotificacao: resp.data.qtdNotificacao,
                            token: resp.data.token
                        }
                    }
                ])
            }
        })
    }
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false }
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            getJSON('login/valida', { token }).then(resp => {
                dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.ok })
            })
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}
