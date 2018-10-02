import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { getJSON, getLocalStorageParam } from '../../util/metodos'
import JanelaPadrao from '../../componentes/JanelaPadrao'
import Moment from 'moment'

class ServExecutados extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [], description: Moment().format('YYYYMM'), loading: true }
        this.handleChange = this.handleChange.bind(this)
        this.keyHandler = this.keyHandler.bind(this)
        this.refresh()
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    keyHandler(e) {
        if (e.key === 'Enter') {
            this.refresh()
        } 
    }

    refresh() {
        this.setState({ ...this.state, list: [], loading: true })

        let sendData = { "idMedico": getLocalStorageParam("idMedico"), "anomes": this.state.description }

        getJSON('medico/servicosexecutados', sendData).then(resp => {
            this.setState({ ...this.state, list: resp.data['servicosexecutados'], loading: false })
        })

    }
    renderRows() {
        var list = this.state.list || []
        if (!Array.isArray(list)) {
            list = [list]
        }

        return list.map((item, indice) => (
            <tr key={indice} >
                <td>{item.data}</td>
                <td>{item.auxiliar}</td>
                <td>{item.procedimento}</td>
                <td>{item.paciente}</td>
                <td>{item.convenio}</td>
            </tr>
        ))
    }

    render() {

        return (
            <JanelaPadrao titulo="Serviços Executados" loading={this.state.loading} >
                <div className="row" >
                    <div className="col-xs-12 col-sm-9 col-md-11" >
                        <input id='description' className='form-control' placeholder='Pesquise pelo Ramal ou Nome'
                            value={this.state.description} onChange={this.handleChange} onKeyUp={this.keyHandler} ></input>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-1" >
                        <button className='btn btn-primary' onClick={() => this.refresh()} >
                            <i className='fa fa-search'></i>
                        </button>
                    </div>
                </div>
                <div className="row" >
                    <Table responsive size="sm">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Tipo</th>
                                <th>Procedimento</th>
                                <th>Paciente</th>
                                <th>Convênio</th>
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