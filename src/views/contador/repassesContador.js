import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import JanelaPadrao from '../../componentes/JanelaPadrao';
import If from '../../util/if';
import { changeEmpresa, changeMedico, escolheRelatorio, listaEmpresas, changeRel } from './repassesContadorAction';



class ServExecutados extends Component {

    componentWillMount() {
        this.props.listaEmpresas()
    }


    renderEmpresa() {
        var list = [{ idEmpresa: "", nmEmpresa: "---Selecione uma Empresa---" }]
        list.push(...this.props.empresas)

        var Data = [],
            MakeItem = function (x) {
                return <option key={x.value} value={x.value} >{x.name}</option>
            }

        list.map((item, indice) => (
            Data.push({ value: item.idEmpresa, name: item.nmEmpresa })
        ))

        return (
            <select value={this.props.idEmpresa} onChange={this.props.changeEmpresa} >
                {Data.map(MakeItem)}
            </select>
        )
    }

    renderSocios() {
        var id = this.props.idEmpresa
        var list = []

        if (id !== "" && id !== "0") {

            list = [{ id: "0", nome: "---Empresa---" }]
            var i = 0
            for (i = 0; i < this.props.empresas.length; i++) {
                if (this.props.empresas[i].idEmpresa === id) {
                    list.push(...this.props.empresas[i].membros)
                    break
                }
            }
        }

        var Data = [],
            MakeItem = function (x) {
                return <option key={x.value} value={x.value}  >{x.name}</option>;
            };

        list.map((item, indice) => (
            Data.push({ value: item.id, name: item.nome })
        ))

        return (
            <select value={this.props.idMedico} onChange={this.props.changeMedico} >
                {Data.map(MakeItem)}
            </select>
        )
    }

    openReport() {
        console.log(this.props.url)
    }

    renderRelatorio() {
        var list = this.props.list || []
        if (!Array.isArray(list)) {
            list = [list]
        }
        var Data = [],
            MakeItem = function (x) {
                return <option key={x.value} value={x.value}  >{x.name}</option>;
            };

        list.map((item, indice) => (
            Data.push({ value: item.url, name: item.texto })
        ))

        return (
            <select value={this.props.url} onChange={this.props.changeRel} onLoad={this.props.changeRel} >
                {Data.map(MakeItem)}
            </select>
        )
    }

    render() {

        return (
            <JanelaPadrao titulo="Repasses" loading={this.props.loading}  >


                <div className="row  font-weight-bold" >
                    <div className="col-xs-6 col-sm-6 col-md-6" >
                        Selecione a Empresa
                                <br />
                        {this.renderEmpresa()}
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6" >
                        Selecione o Sócio
                                <br />
                        {this.renderSocios()}
                    </div>
                </div>

                <div className="row" style={{ paddingTop: '8px' }} >
                    <div className="col-xs-6 col-sm-6 col-md-6" >
                        <span className="font-weight-bold" >Escolha o tipo do relatório</span>
                        <br />
                        <input type="radio" name="tipo" id="tp1" checked={this.props.tipo === 1} onChange={this.props.escolheRelatorio} /> Repasse Mensal
                        &nbsp;
                        <input type="radio" name="tipo" id="tp2" checked={this.props.tipo === 2} onChange={this.props.escolheRelatorio} /> Repasse Semanal
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6" >
                        <span className="font-weight-bold" >Escolha a competência</span>
                        <br />
                        {this.renderRelatorio()}
                        &nbsp;&nbsp;
                        <If test={this.props.tipo === 1 && this.props.url !== ""} >
                            <Button type="submit" size="sm" color="primary" href={this.props.url} target="_blank" >
                                <i className="fa fa-dot-circle-o"></i> Abrir Relatório
                                    </Button>
                        </If>
                        <If test={this.props.tipo === 2} >
                            <Button type="submit" size="sm" color="primary" href={this.props.url} target="_blank" >
                                <i className="fa fa-dot-circle-o"></i> Detalhado
                            </Button>
                            &nbsp;&nbsp;
                            <Button type="submit" size="sm" color="primary" href={this.props.url.replace('-1-', '-2-')} target="_blank" >
                                <i className="fa fa-dot-circle-o"></i> Resumido
                            </Button>
                            &nbsp;&nbsp;
                            <Button type="submit" size="sm" color="primary" href={this.props.url.replace('-1-', '-3-')} target="_blank" >
                                <i className="fa fa-dot-circle-o"></i>  Paciente
                            </Button>
                        </If>
                    </div>
                </div>
            </JanelaPadrao >
        );
    }
}

const mapStateToProps = state => ({
    idMedico: state.repassesContadorReducer.idMedico,
    idEmpresa: state.repassesContadorReducer.idEmpresa,
    empresas: state.repassesContadorReducer.empresas,
    list: state.repassesContadorReducer.list,
    tipo: state.repassesContadorReducer.tipo,
    url: state.repassesContadorReducer.url,
    loading: state.repassesContadorReducer.loading
})
const mapDispatchToProps = dispatch => bindActionCreators({ listaEmpresas, changeEmpresa, escolheRelatorio, changeMedico, changeRel }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ServExecutados)