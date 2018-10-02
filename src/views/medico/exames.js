import React, { Component } from 'react';
import { ListGroupItem, Badge, Row, Col, Button } from 'reactstrap';
import { getJSON, getLocalStorageParam } from '../../util/metodos'
import JanelaPadrao from '../../componentes/JanelaPadrao'
import DadosPaciente from '../../componentes/dadosPaciente'
import If from '../../util/if'

class Exames extends Component {
    constructor(props) {
        super(props)
        const id = this.props.match.params.id
        this.state = { list: [], idPaciente: id, loading: true }
        this.refresh()
    }

    refresh() {

        let sendData = { "idMedico": getLocalStorageParam("idMedico"), "id": this.state.idPaciente }
        getJSON('paciente/exame', sendData).then(resp => {
            this.setState({ ...this.state, list: resp.data['exames'], loading: false })
        })

    }
    renderRows() {
        var list = this.state.list || []
        if (!Array.isArray(list)) {
            list = [list]
        }

        return list.map((item, indice) => (
            <ListGroupItem key={indice} className={item.laudo === '' ? 'list-group-item-accent-danger' : 'list-group-item-accent-success'}>
                <div><strong>{item.descricao}</strong> </div>
                <Row>
                    <Col xs="12" sm="6" md="1">
                        <If test={item.laudo !== ''} >
                            <Badge color="success">Liberado</Badge>
                        </If>
                        <If test={item.laudo === ''} >
                            <Badge color="danger">Pendente</Badge>
                        </If>
                    </Col>
                    <Col xs="12" sm="3" md="2">
                        <i className="cui-calendar" title={item.laudo !== '' ? 'Data do Laudo' : 'Data do Pedido'} > </i>
                        {item.laudo !== '' ? item.laudo : item.data}
                    </Col>
                    <Col xs="12" sm="5" md="7">
                        <i className="icon-docs" title ="Exame"> </i>
                        {item.exame}
                    </Col>
                    <Col xs="12" sm="4" md="2">
                        <If test={item.laudo !== ''} >
                            <Button type="submit" size="sm" color="primary" href={item.url} target="_blank" ><i className="fa fa-dot-circle-o"></i> Imprimir</Button>
                        </If>
                    </Col>

                </Row>
            </ListGroupItem>
        ))
    }

    render() {

        return (
            <JanelaPadrao titulo="Exames Disponíveis" loading={this.state.loading} >
                <DadosPaciente idPaciente={this.state.idPaciente} />
                {this.renderRows()}
            </JanelaPadrao>
        );
    }
}

export default Exames