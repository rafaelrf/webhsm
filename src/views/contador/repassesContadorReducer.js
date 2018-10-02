const INITIAL_STATE = {
    empresas: [],
    idEmpresa: "0",
    idMedico: "0",
    url: "",
    list: [],
    tipo: 1,
    loading: true
}

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'RED_LIST_EMPRESAS':
            return { ...state, empresas: action.payload }

        case 'RED_CHANGE_EMPRESA':
            return { ...state, idEmpresa: action.payload }

        case 'RED_CHANGE_MEDICO':
            return { ...state, idMedico: action.payload }

        case 'RED_CHANGE_TIPOREL':
            return { ...state, tipo: action.payload }

        case 'RED_CHANGE_REL':
            return { ...state, url: action.payload }

        case 'RED_LIST_RELATORIOS':
            return { ...state, list: action.payload }

        case 'RED_LIST_RELATORIOS_LIMPAR':
            return { ...state, list: [] }

        case 'RED_START_LOADING':
            return { ...state, loading: true }

        case 'RED_STOP_LOADING':
            return { ...state, loading: false }

        default:
            return state
    }

}