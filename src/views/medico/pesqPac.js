import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col, Badge } from 'reactstrap';
import { getJSON, getLocalStorageParam } from '../../util/metodos'
import JanelaPadrao from '../../componentes/JanelaPadrao'

class Exames extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [], description: '', cartao: '', nascimento: '', loading: false, internado: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeCartao = this.handleChangeCartao.bind(this)
        this.handleChangeNascimento = this.handleChangeNascimento.bind(this)
        this.handleChangeInternado = this.handleChangeInternado.bind(this)
        this.keyHandler = this.keyHandler.bind(this)
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleChangeCartao(e) {
        this.setState({ ...this.state, cartao: e.target.value })
    }

    handleChangeNascimento(e) {
        this.setState({ ...this.state, nascimento: e.target.value })
    }

    handleChangeInternado(e) {
        this.setState({ ...this.state, internado: e.target.checked })
    }

    keyHandler(e) {
        if (e.key === 'Enter') {
            this.refresh()
        }
    }

    refresh() {
        this.setState({ ...this.state, list: [], loading: true })

        let sendData = {
            "idMedico": getLocalStorageParam("idMedico")
            , "nome": this.state.description || ""
            , "id": this.state.cartao || "0"
            , "nascimento": this.state.nascimento.replace("/", "").replace("/", "") || ""
            , "internado": this.state.internado ? "1" : "0"
        }

        getJSON('paciente', sendData).then(resp => {
            this.setState({ ...this.state, list: resp.data['paciente'], loading: false })
        })

    }
    renderRows() {
        var list = this.state.list || []
        if (!Array.isArray(list)) {
            list = [list]
        }

        return list.map((item, indice) => (
            <ListGroupItem key={indice} className='list-group-item-accent-success' tag="a" href={'#/paciente/' +item.id+'/exames'} action >
                <Badge color="success"></Badge>
                <div>
                    <i className='fa fa-users'></i>
                    <strong> {item.nome}</strong>
                </div>
                <Row>
                    <Col xs="6" sm="4" md="4">
                        <i className="cui-calendar" title="Filiação"> </i>
                        {item.nascimento} - ({item.idade} anos)
                    </Col>
                    <Col xs="6" sm="4" md="4">
                        <i className="cui-user-follow" title="Filiação"> </i>
                        {item.filiacao}
                    </Col>
                    <Col xs="6" sm="4" md="4">
                        <i className="cui-star" title="Cartão HSM" > </i>
                        {item.id}
                    </Col>
                </Row>
            </ListGroupItem>
        ))
    }

    render() {

        return (
            <JanelaPadrao titulo="Pesquisar Paciente" loading={this.state.loading} >
                <div className="row" >
                    <div className="col-xs-12 col-sm-3 col-md-3" >
                        <input className='form-control' placeholder='Cartão HSM'
                            value={this.state.cartao} onChange={this.handleChangeCartao} onKeyUp={this.keyHandler} ></input>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3" >
                        <input className='form-control' placeholder='Dt. Nascimento'
                            value={this.state.nascimento} onChange={this.handleChangeNascimento} onKeyUp={this.keyHandler} ></input>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3" >
                        <input className='form-control' placeholder='Nome do Paciente'
                            value={this.state.description} onChange={this.handleChange} onKeyUp={this.keyHandler} ></input>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-2 form-control" >
                        <input type="checkbox"
                            checked={this.state.internado} onChange={this.handleChangeInternado} ></input>
                        <span> Internado</span>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-1" >
                        <button className='btn btn-primary' onClick={() => this.refresh()} >
                            <i className='fa fa-search'></i>
                        </button>
                    </div>
                </div>
                <ListGroup >
                    {this.renderRows()}
                </ListGroup>
            </JanelaPadrao>
        );
    }
}

export default Exames