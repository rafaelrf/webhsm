import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { getJSON, getLocalStorageParam } from '../../util/metodos'
import JanelaPadrao from '../../componentes/JanelaPadrao'

class Ramais extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [], loading: true }
        this.refresh()
    }

    refresh() {
        let sendData = { "chapa": getLocalStorageParam("chapa") }

        getJSON('contracheque/periodos', sendData).then(resp => {
            this.setState({ ...this.state, list: resp.data['periodos'], loading: false })
        })

    }
    renderRows() {
        var list = this.state.list || []
        if (!Array.isArray(list)) {
            list = [list]
        }

        return list.map((item, indice) => (
            <tr key={indice} >
                <td>{item.periodo}</td>
                <td>
                    <Button type="submit" size="sm" color="primary" href={item.url} target="_blank" ><i className="fa fa-dot-circle-o"></i> Imprimir</Button>
                </td>
            </tr>
        ))
    }

    render() {

        return (
            <JanelaPadrao titulo="Contra Cheque" loading={this.state.loading} >
                <Table responsive size="sm">
                    <thead>
                        <tr>
                            <th>Competência</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </Table>
            </JanelaPadrao>
        );
    }
}

export default Ramais