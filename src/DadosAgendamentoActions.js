//import { getJSON } from '../../util/metodos'

const listconvenios = [{ "nm_convenio": "Amil", "id_convenio": 26 }, { "nm_convenio": "Assefaz", "id_convenio": 6 }, { "nm_convenio": "AXA Assistence", "id_convenio": 109 }, { "nm_convenio": "C V R D", "id_convenio": 56 }, { "nm_convenio": "Camed Saúde", "id_convenio": 3 }, { "nm_convenio": "Campanha Outubro Rosa", "id_convenio": 103 }, { "nm_convenio": "Capesaude", "id_convenio": 7 }, { "nm_convenio": "Casembrapa", "id_convenio": 85 }, { "nm_convenio": "Cassi", "id_convenio": 17 }, { "nm_convenio": "CNRAC", "id_convenio": 57 }, { "nm_convenio": "Complementação de QT", "id_convenio": 105 }, { "nm_convenio": "Conab", "id_convenio": 44 }, { "nm_convenio": "Consulta APAC\\BPA", "id_convenio": 49 }, { "nm_convenio": "Correios", "id_convenio": 4 }, { "nm_convenio": "DEMANDA JUDICIAL", "id_convenio": 90 }, { "nm_convenio": "Doação SESAPI", "id_convenio": 91 }, { "nm_convenio": "Embratel", "id_convenio": 12 }, { "nm_convenio": "Fachesf", "id_convenio": 9 }, { "nm_convenio": "Fator de Crescimento - Rede Feminina", "id_convenio": 114 }, { "nm_convenio": "Fator de Crescimento Reserva", "id_convenio": 113 }, { "nm_convenio": "Filantropia", "id_convenio": 43 }, { "nm_convenio": "Filantropia Compl Qt", "id_convenio": 94 }, { "nm_convenio": "Filantropia_oncologia", "id_convenio": 48 }, { "nm_convenio": "Funcionário HSM", "id_convenio": 70 }, { "nm_convenio": "Fusex", "id_convenio": 14 }, { "nm_convenio": "Gama Saude", "id_convenio": 83 }, { "nm_convenio": "Geap", "id_convenio": 18 }, { "nm_convenio": "Gratuidade", "id_convenio": 93 }, { "nm_convenio": "Hospital Universitário", "id_convenio": 100 }, { "nm_convenio": "Humana Assistência Médica Ltda", "id_convenio": 77 }, { "nm_convenio": "Iapep Saude", "id_convenio": 36 }, { "nm_convenio": "Intermed", "id_convenio": 34 }, { "nm_convenio": "INTERMEDICA", "id_convenio": 92 }, { "nm_convenio": "Ipmt", "id_convenio": 39 }, { "nm_convenio": "Itapicuru Agro Industrial", "id_convenio": 52 }, { "nm_convenio": "Marinha do Brasil", "id_convenio": 107 }, { "nm_convenio": "Medial Saúde", "id_convenio": 51 }, { "nm_convenio": "Medicamentos - Pesquisa", "id_convenio": 62 }, { "nm_convenio": "Medicina do Trabalho HSM", "id_convenio": 95 }, { "nm_convenio": "Mediservice", "id_convenio": 53 }, { "nm_convenio": "Medplan", "id_convenio": 41 }, { "nm_convenio": "PAMS - SAÚDE CAIXA", "id_convenio": 31 }, { "nm_convenio": "Particular", "id_convenio": 5 }, { "nm_convenio": "Plamta", "id_convenio": 28 }, { "nm_convenio": "Plan-assiste (a) Mpt", "id_convenio": 30 }, { "nm_convenio": "Plan-assiste (b) Mpf", "id_convenio": 24 }, { "nm_convenio": "Plano Economico", "id_convenio": 29 }, { "nm_convenio": "Plante", "id_convenio": 2 }, { "nm_convenio": "Pro-social", "id_convenio": 13 }, { "nm_convenio": "Saude Bradesco Empresarial", "id_convenio": 87 }, { "nm_convenio": "Saude Bradesco Individual", "id_convenio": 8 }, { "nm_convenio": "Secretaria De Saude", "id_convenio": 55 }, { "nm_convenio": "SEPACO AUTOGESTAO", "id_convenio": 99 }, { "nm_convenio": "Sul America Empresarial", "id_convenio": 84 }, { "nm_convenio": "Sul America Individual", "id_convenio": 22 }, { "nm_convenio": "Sus", "id_convenio": 11 }, { "nm_convenio": "Unimed - Outras Praças", "id_convenio": 46 }, { "nm_convenio": "Unimed Light", "id_convenio": 69 }, { "nm_convenio": "Unimed Teresina", "id_convenio": 23 }, { "nm_convenio": "UNIPLAM - Assistência Médica Hospitalar", "id_convenio": 101 }];
const listamedicos = [{ "id_medico": 4535, "nm_medico": "Adelino Nunes Cavalcante Junior" }, { "id_medico": 5812, "nm_medico": "Alfredo Walburgo De Souza Pereira" }, { "id_medico": 4515, "nm_medico": "Andre Biondi Ferraz" }, { "id_medico": 5246, "nm_medico": "Bárbara Hamedy Carvalho E Queiroz" }, { "id_medico": 4496, "nm_medico": "Benjamim Soares De Carvalho Neto" }, { "id_medico": 4808, "nm_medico": "Carine Soares Borges" }, { "id_medico": 6896, "nm_medico": "Caroline Baima De Melo" }, { "id_medico": 7417, "nm_medico": "Caroline Torres Sampaio" }, { "id_medico": 5079, "nm_medico": "Cléciton Braga Tavares" }, { "id_medico": 4467, "nm_medico": "Daniel Fabiano Ferreira" }, { "id_medico": 7220, "nm_medico": "Danilo Da Silva Leite" }, { "id_medico": 6706, "nm_medico": "Elizeu Pereira Dos Santos Neto" }, { "id_medico": 6475, "nm_medico": "Elton Portela Santos Bezerra" }, { "id_medico": 4784, "nm_medico": "Erlan Pércio Lopes Rufino" }, { "id_medico": 6777, "nm_medico": "Fabiano Aguiar Coêlho" }, { "id_medico": 4717, "nm_medico": "Felipe Rodrigues Pacheco Britto" }, { "id_medico": 5802, "nm_medico": "Francisco Karlos Leal Gomes" }, { "id_medico": 7412, "nm_medico": "Francisco Norberto De Moura Neto" }, { "id_medico": 5869, "nm_medico": "Geivan Borges Da Silva Freire" }, { "id_medico": 7473, "nm_medico": "George Mello Neiva Nunes" }, { "id_medico": 4793, "nm_medico": "Hamilton De Sousa Mourão" }, { "id_medico": 4342, "nm_medico": "Hardynn Wesley Saunders Rocha Tavares" }, { "id_medico": 5233, "nm_medico": "Herion Alves Da Silva Machado" }, { "id_medico": 6992, "nm_medico": "Hermano Rodrigues Pinheiro" }, { "id_medico": 7411, "nm_medico": "Igor Cardoso Campos" }, { "id_medico": 4860, "nm_medico": "Igor Da Rocha Martins Franklin" }, { "id_medico": 5188, "nm_medico": "Ilana Vidal Neiva" }, { "id_medico": 5285, "nm_medico": "Jane Carneiro De Oliveira" }, { "id_medico": 6271, "nm_medico": "Jônatas Melo Neto" }, { "id_medico": 7297, "nm_medico": "Kamila Bezerra Fernandes Diocesano" }, { "id_medico": 5108, "nm_medico": "Lucas Teixeira Dias" }, { "id_medico": 4762, "nm_medico": "Luciana Neiva Nunes Azevedo" }, { "id_medico": 4480, "nm_medico": "Luciano Jose Couto De Sousa Filho" }, { "id_medico": 7246, "nm_medico": "Luiza Maria Damásio Da Silva" }, { "id_medico": 4773, "nm_medico": "Marcilio Diogo De Oliveira Barbosa" }, { "id_medico": 7539, "nm_medico": "Marcus Vinicius Monteiro Bertino" }, { "id_medico": 4712, "nm_medico": "Maria Das Graças Barbosa Sousa" }, { "id_medico": 7080, "nm_medico": "Marilia Buenos Aires Cabral Tavares" }, { "id_medico": 6891, "nm_medico": "Natalia Juliana Vieira Bezerra" }, { "id_medico": 5848, "nm_medico": "Pâmela Moema Policarpo Bezerra" }, { "id_medico": 4992, "nm_medico": "Patricia Coelho Mousinho" }, { "id_medico": 4566, "nm_medico": "Paula De Almeida Melo" }, { "id_medico": 4567, "nm_medico": "Rayana Marcia Dos Santos Ferreira" }, { "id_medico": 7050, "nm_medico": "Samuel Machado Martins" }, { "id_medico": 7116, "nm_medico": "Susyanne De Lavor Cosme" }, { "id_medico": 4724, "nm_medico": "Tiago Lobão Lopes" }, { "id_medico": 6875, "nm_medico": "Vilson De Moura Bezerra" }, { "id_medico": 5970, "nm_medico": "Vivianne Martins Almeida Pompeu" }, { "id_medico": 4764, "nm_medico": "Wildson Moura Gonçalves" }, { "id_medico": 4642, "nm_medico": "Yuri Nogueira Chaves" }];
const listaespecialidades = [{ "id_especialidade": 1044, "nm_especialidade": "Alergia E Imunologia" }, { "id_especialidade": 1045, "nm_especialidade": "Anestesiologia" }, { "id_especialidade": 35, "nm_especialidade": "Angiologia" }, { "id_especialidade": 1046, "nm_especialidade": "Cancerologia" }, { "id_especialidade": 15, "nm_especialidade": "Cardiologia" }, { "id_especialidade": 1027, "nm_especialidade": "Cirurgia Buco-Maxilo-Facial" }, { "id_especialidade": 1047, "nm_especialidade": "Cirurgia Cardiovascular" }, { "id_especialidade": 1049, "nm_especialidade": "Cirurgia De Cabeça E Pescoço" }, { "id_especialidade": 41, "nm_especialidade": "Cirurgia Geral" }, { "id_especialidade": 23, "nm_especialidade": "Cirurgia Pediátrica" }, { "id_especialidade": 14, "nm_especialidade": "Cirurgia Plástica" }, { "id_especialidade": 1029, "nm_especialidade": "Cirurgia Torácica" }, { "id_especialidade": 1030, "nm_especialidade": "Cirurgia Vascular" }, { "id_especialidade": 33, "nm_especialidade": "Clínica Médica" }, { "id_especialidade": 1051, "nm_especialidade": "Coloproctologia" }, { "id_especialidade": 8, "nm_especialidade": "Dermatologia" }, { "id_especialidade": 36, "nm_especialidade": "Endocrinologia" }, { "id_especialidade": 5, "nm_especialidade": "Fonoaudiologia" }, { "id_especialidade": 10, "nm_especialidade": "Gastroenterologia" }, { "id_especialidade": 1031, "nm_especialidade": "Geriatria" }, { "id_especialidade": 11, "nm_especialidade": "Ginecologia" }, { "id_especialidade": 1055, "nm_especialidade": "Hematologia E Hemoterapia" }, { "id_especialidade": 1057, "nm_especialidade": "Infectologia" }, { "id_especialidade": 32, "nm_especialidade": "Mastologia" }, { "id_especialidade": 18, "nm_especialidade": "Nefrologia" }, { "id_especialidade": 1005, "nm_especialidade": "Neurocirurgia" }, { "id_especialidade": 2, "nm_especialidade": "Neurologia" }, { "id_especialidade": 7, "nm_especialidade": "Nutrição" }, { "id_especialidade": 4, "nm_especialidade": "Oftalmologia" }, { "id_especialidade": 1036, "nm_especialidade": "Ortodontia" }, { "id_especialidade": 1067, "nm_especialidade": "Ortopedia E Traumatologia" }, { "id_especialidade": 3, "nm_especialidade": "Otorrinolaringologia" }, { "id_especialidade": 26, "nm_especialidade": "Pediatria" }, { "id_especialidade": 9, "nm_especialidade": "Pneumologia" }, { "id_especialidade": 1127, "nm_especialidade": "Prótese / Dentística" }, { "id_especialidade": 1069, "nm_especialidade": "Psiquiatria" }, { "id_especialidade": 1070, "nm_especialidade": "Radiologia E Diagnóstico Por Imagem" }, { "id_especialidade": 17, "nm_especialidade": "Radioterapia" }, { "id_especialidade": 38, "nm_especialidade": "Reumatologia" }, { "id_especialidade": 19, "nm_especialidade": "Urologia" }];
const listaplanos = [{ "id_plano": 52, "nm_plano": "- FUSEX", "id_convenio": 14 }, { "id_plano": 42, "nm_plano": "AMIL", "id_convenio": 26 }, { "id_plano": 38, "nm_plano": "ASSOCIADO", "id_convenio": 17 }, { "id_plano": 27, "nm_plano": "BANCO TRIANGULO", "id_convenio": 51 }, { "id_plano": 2, "nm_plano": "BASICO", "id_convenio": 7 }, { "id_plano": 1, "nm_plano": "BÁSICO", "id_convenio": 5 }, { "id_plano": 23, "nm_plano": "CONFORTO CLASS", "id_convenio": 51 }, { "id_plano": 36, "nm_plano": "DIRETO", "id_convenio": 37 }, { "id_plano": 40, "nm_plano": "EMPRESARIAL", "id_convenio": 87 }, { "id_plano": 3, "nm_plano": "ESPECIAL", "id_convenio": 7 }, { "id_plano": 34, "nm_plano": "ESPECIAL OURO", "id_convenio": 37 }, { "id_plano": 35, "nm_plano": "ESPECIAL PRATA", "id_convenio": 37 }, { "id_plano": 4, "nm_plano": "EXECUTIVO", "id_convenio": 7 }, { "id_plano": 33, "nm_plano": "FACHESF", "id_convenio": 9 }, { "id_plano": 5, "nm_plano": "FAMILIA", "id_convenio": 17 }, { "id_plano": 50, "nm_plano": "FUSEX - FATOR CUSTO", "id_convenio": 14 }, { "id_plano": 51, "nm_plano": "FUSEX - PASS", "id_convenio": 14 }, { "id_plano": 13, "nm_plano": "GEAPCLASSICO", "id_convenio": 18 }, { "id_plano": 14, "nm_plano": "GEAPESSENCIAL", "id_convenio": 18 }, { "id_plano": 11, "nm_plano": "GEAPFAMILIA", "id_convenio": 18 }, { "id_plano": 15, "nm_plano": "GEAPREFERENCIA", "id_convenio": 18 }, { "id_plano": 12, "nm_plano": "GEAPSAUDE", "id_convenio": 18 }, { "id_plano": 44, "nm_plano": "HUMANA ASSISTÊNCIA MÉDICA", "id_convenio": 77 }, { "id_plano": 26, "nm_plano": "IDEAL", "id_convenio": 51 }, { "id_plano": 41, "nm_plano": "INDIVIDUAL", "id_convenio": 8 }, { "id_plano": 45, "nm_plano": "INTERMED", "id_convenio": 34 }, { "id_plano": 8, "nm_plano": "LIGHT", "id_convenio": 69 }, { "id_plano": 24, "nm_plano": "LUXO", "id_convenio": 51 }, { "id_plano": 22, "nm_plano": "M. GLOBAL", "id_convenio": 51 }, { "id_plano": 56, "nm_plano": "Marinha", "id_convenio": 107 }, { "id_plano": 30, "nm_plano": "MCDONALDS", "id_convenio": 51 }, { "id_plano": 49, "nm_plano": "MedPlan", "id_convenio": 41 }, { "id_plano": 10, "nm_plano": "OUTRAS PRACAS", "id_convenio": 46 }, { "id_plano": 39, "nm_plano": "PAM", "id_convenio": 85 }, { "id_plano": 43, "nm_plano": "PLAN-ASSISTE (B) MPF", "id_convenio": 24 }, { "id_plano": 16, "nm_plano": "PLANO CLASSICO I", "id_convenio": 51 }, { "id_plano": 17, "nm_plano": "PLANO CLASSICO II", "id_convenio": 51 }, { "id_plano": 18, "nm_plano": "PLANO CLASSICO III", "id_convenio": 51 }, { "id_plano": 19, "nm_plano": "PLANO CLASSICO IV", "id_convenio": 51 }, { "id_plano": 20, "nm_plano": "PLANO I EMPRESARIAL", "id_convenio": 51 }, { "id_plano": 7, "nm_plano": "PLUS I", "id_convenio": 6 }, { "id_plano": 6, "nm_plano": "PLUS VI - AMPLIADA", "id_convenio": 6 }, { "id_plano": 37, "nm_plano": "PRO-SOCIAL", "id_convenio": 13 }, { "id_plano": 31, "nm_plano": "QUALITY", "id_convenio": 51 }, { "id_plano": 48, "nm_plano": "RECIPROCIDADE", "id_convenio": 17 }, { "id_plano": 32, "nm_plano": "STANDART BRONZE", "id_convenio": 51 }, { "id_plano": 21, "nm_plano": "STANDART EMPRESARIAL", "id_convenio": 51 }, { "id_plano": 28, "nm_plano": "SUPERIOR", "id_convenio": 7 }, { "id_plano": 9, "nm_plano": "TERESINA", "id_convenio": 23 }];

export function carregaConvenios() {
    return { type: 'CARREGAR_CONVENIOS_AGENDAMENTO', payload: listconvenios }
}

export function selecionaConvenio(e) {
    let planos = listaplanos.filter((plano) => (plano.id_convenio === (+e.target.value)));

    return {
        type: 'CONVENIO_SELECIONADO_AGENDAMENTO',
        payload: +e.target.value, payloadplanos: planos, 
        payloadespecialidade: listaespecialidades,
        payloadmedicos: listamedicos
    }
}

export function selecionaPlano(e) {
    return {type: 'PLANO_SELECIONADO_AGENDAMENTO', payload: +e.target.value}
}

export function selecionaEspecialidade(e) {
    return {type: 'ESPECIALIDADE_SELECIONADA_AGENDAMENTO', payload: +e.target.value}
}

export function selecionaMedico(e) {
    return {type: 'MEDICO_SELECIONADO_AGENDAMENTO', payload: +e.target.value}
}

export function declaraEstarCiente(e) {
    return {type: 'CHECKBOX_DECLARA_CIENTE_AGENDAMENTO', payload: +e.target.value}
}

export function escolhendoDataAgendamento(data) {
    return {type: 'ESCONHEDO_DATA_AGENDAMENTO', payload: data}
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