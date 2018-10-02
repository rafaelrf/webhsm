import React, { Component } from 'react';
import { Table, Button, Row, Col, } from 'reactstrap';
import { getJSON, getLocalStorageParam } from '../../util/metodos'
import JanelaPadrao from '../../componentes/JanelaPadrao'
import If from '../../util/if'

class ServExecutados extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [], tipo: 1, loading: true }
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.refresh(this.state.tipo)
    }

    handleChange1(e) {
        this.setState({ ...this.state, list: [], tipo: 1, loading: true })
        this.refresh(1)
    }
    handleChange2(e) {
        this.setState({ ...this.state, list: [], tipo: 2, loading: true })
        this.refresh(2)
    }

    refresh(tipo) {
        let sendData = { "idMedico": getLocalStorageParam("idMedico"), "tipo": tipo }

        getJSON('repasse', sendData).then(resp => {
            this.setState({ ...this.state, list: resp.data['repasse'], loading: false })
        })

    }
    renderRows() {
        var list = this.state.list || []
        if (!Array.isArray(list)) {
            list = [list]
        }

        return list.map((item, indice) => (
            <tr key={indice} >
                <td>{item.texto}</td>
                <td>
                    <If test={this.state.tipo === 1} >
                        <Button type="submit" size="sm" color="primary" href={item.url} target="_blank" ><i className="fa fa-dot-circle-o"></i> Abrir</Button>
                    </If>
                    <If test={this.state.tipo > 1} >
                        <Row className="align-items-center">
                            <Col col="4" xl className="mb-4 mb-xl-4">
                                <Button type="submit" size="sm" color="primary" href={item.url} target="_blank" ><i className="fa fa-dot-circle-o"></i> Detalhado</Button>
                            </Col>
                            <Col col="4" xl className="mb-4 mb-xl-4">
                                <Button type="submit" size="sm" color="primary" href={item.url.replace('-1-', '-2-')} target="_blank" ><i className="fa fa-dot-circle-o"></i> Resumido</Button>
                            </Col>
                            <Col col="4" xl className="mb-4 mb-xl-4">
                                <Button type="submit" size="sm" color="primary" href={item.url.replace('-1-', '-3-')} target="_blank" ><i className="fa fa-dot-circle-o"></i> Dados do Paciente</Button>
                            </Col>
                        </Row>
                    </If>
                </td>
            </tr>
        ))
    }

    render() {

        return (
            <JanelaPadrao titulo="Repasses" loading={this.state.loading} >
                <div className="row" >
                    <div className="col-xs-6 col-sm-6 col-md-6" >
                        <input type="radio" name="tipo" checked={this.state.tipo===1} onChange={this.handleChange1} /> Repasse Mensal
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6" >
                        <input type="radio" name="tipo" checked={this.state.tipo===2} onChange={this.handleChange2} /> Repasse Semanal
                    </div>
                </div>
                <div className="row" >
                    <Table responsive size="sm">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </Table>
                </div>
            </JanelaPadrao>
        );
    }
}

export default ServExecutados