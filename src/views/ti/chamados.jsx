import React, { Component } from 'react';
import { ListGroup, Row, Col, ListGroupItem, Badge } from 'reactstrap';
import { getJSON, getLocalStorageParam } from '../../util/metodos'
import If from '../../util/if'
import JanelaPadrao from '../../componentes/JanelaPadrao'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [], loading: true }
        this.refresh()
    }


    refresh() {
        let sendData = { "usuario": getLocalStorageParam("usuario") }

        getJSON('cpd/chamados', sendData).then(resp => {
            this.setState({ ...this.state, list: resp.data['chamados'], loading: false })
        })

    }
    renderRows() {
        var list = this.state.list || []
        if (!Array.isArray(list)) {
            list = [list]
        }
        return list.map((item, indice) => (
            <ListGroupItem key={indice} className={item.situacao === 'Pendente' ? 'list-group-item-accent-danger' : 'list-group-item-accent-success'}>
                <div><strong>{item.descricao}</strong> </div>

                <Row>
                    <Col xs="12" sm="6" md="2">
                        <If test={item.situacao === 'Pendente'} >
                            <Badge color="danger">{item.situacao}</Badge>
                        </If>
                        <If test={item.situacao === 'Iniciado'} >
                            <Badge color="success">{item.situacao}</Badge>
                        </If>
                    </Col>
                    <Col xs="12" sm="6" md="3">
                        <i className="cui-calendar"> </i>
                        {item.data}
                    </Col>
                    <Col xs="12" sm="6" md="2">
                        <i className="cui-screen-smartphone"> </i>
                        {item.ramal}
                    </Col>
                    <Col xs="12" sm="6" md="2">
                        <i className="cui-people"> </i>
                        {item.contato}
                    </Col>
                    <Col xs="12" sm="6" md="3">
                        <i className="cui-location-pin"> </i>
                        {item.setor}
                    </Col>
                </Row>
            </ListGroupItem>
        ))
    }

    render() {

        return (
            <JanelaPadrao titulo="Chamados em Aberto" loading={this.state.loading} >
                <ListGroup >
                    {this.renderRows()}
                </ListGroup>
            </JanelaPadrao>
        );
    }
}

export default Dashboard