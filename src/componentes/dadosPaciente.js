import React, { Component } from 'react'
import { ListGroupItem, Badge, Row, Col } from 'reactstrap'
import { getJSON, getLocalStorageParam } from '../util/metodos'

class DadosPaciente extends Component {
    constructor(props) {
        super(props)
        this.state = { idPaciente: props.idPaciente, nmPaciente: "", nascimento: "", idade: "", filiacao: "" }
        this.refresh()
    }

    refresh() {
        let sendData2 = {
            "idMedico": getLocalStorageParam("idMedico")
            , "nome": ""
            , "id": this.state.idPaciente
            , "nascimento": ""
            , "internado": "0"
        }

        getJSON('paciente', sendData2).then(resp => {
            let pac = resp.data['paciente'][0]
            this.setState({ ...this.state, nmPaciente: pac["nome"], nascimento: pac["nascimento"], idade: pac["idade"], filiacao: pac["filiacao"] })
        })

    }


    render() {

        return (
            <ListGroupItem key={this.state.idPaciente} className='list-group-item-accent-success' >
                <Badge color="success"></Badge>
                <div>
                    <i className='fa fa-users'></i>
                    <strong> {this.state.nmPaciente}</strong>
                </div>
                <Row>
                    <Col xs="6" sm="4" md="4">
                        <i className="cui-calendar" title="Filiação"> </i>
                        {this.state.nascimento} - ({this.state.idade} anos)
                </Col>
                    <Col xs="6" sm="4" md="4">
                        <i className="cui-user-follow" title="Filiação"> </i>
                        {this.state.filiacao}
                    </Col>
                    <Col xs="6" sm="4" md="4">
                        <i className="cui-star" title="Cartão HSM" > </i>
                        {this.state.idPaciente}
                    </Col>
                </Row>
            </ListGroupItem>
        )
    }
}

export default DadosPaciente