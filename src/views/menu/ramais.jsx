import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { getJSON } from '../../util/metodos'
import JanelaPadrao from '../../componentes/JanelaPadrao'

class Ramais extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [], original: [], description: '', loading: true }
        this.keyHandler = this.keyHandler.bind(this)
        this.search = this.search.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.clear = this.clear.bind(this)
        this.refresh()
    }

    keyHandler(e) {
        if (e.key === 'Enter') {
            this.search(this.state.description)
        } else if (e.key === 'Escape') {
            this.clear()
        }
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    removeAcento(text) {
        text = text.toLowerCase();
        text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
        text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
        return text;
    }

    clear() {
        this.setState({ ...this.state, description: '', list: this.state.original })
    }

    search(description) {
        var listPesq = []
        var i = 0;
        for (i = 0; i < this.state.original.length; i++) {
            if (this.state.original[i].numero.indexOf(description) === 0
                || this.removeAcento(this.state.original[i].nome).indexOf(this.removeAcento(description)) >= 0) {
                listPesq.push(this.state.original[i])
            }
        }
        this.setState({ ...this.state, list: listPesq })
    }

    refresh() {
        getJSON('ramais', null).then(resp => {
            this.setState({ ...this.state, list: resp.data['ramais'], original: resp.data['ramais'], loading: false })
        })

    }
    renderRows() {
        var list = this.state.list || []
        if (!Array.isArray(list)) {
            list = [list]
        }

        return list.map((item, indice) => (
            <tr key={indice} >
                <td>{item.numero}</td>
                <td>{item.nome}</td>
            </tr>
        ))
    }

    render() {

        return (
            <JanelaPadrao titulo="Ramais" loading={this.state.loading} >
                <div className="row" >
                    <div className="col-xs-12 col-sm-9 col-md-11" >
                        <input id='description' className='form-control' placeholder='Pesquise pelo Ramal ou Nome'
                            value={this.state.description} onChange={this.handleChange} onKeyUp={this.keyHandler} ></input>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-1" >
                        <button className='btn btn-primary'
                            onClick={() => this.search(this.state.description)} >
                            <i className='fa fa-search'></i>
                        </button>
                    </div>
                </div>
                <Table responsive size="sm">
                    <thead>
                        <tr>
                            <th>Ramal</th>
                            <th>Descrição</th>
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