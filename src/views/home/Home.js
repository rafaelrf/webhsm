import React, { Component } from 'react'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Redirect } from 'react-router-dom';

import {
  carregaConvenios, selecionaConvenio, selecionaPlano,
  selecionaEspecialidade, selecionaMedico
} from '../../DadosAgendamentoActions'
import { toastr } from 'react-redux-toastr'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = { redirect: false }
  }

  componentWillMount() {
    this.props.carregaConvenios();
    this.props.carregaConvenios();
  }

  actionFormAgendamento(event) {
    event.preventDefault();

    if (this.props.idconvenio === 0) {
      toastr.error('Atenção', "Informe o Convênio!");
      return;
    } else if (this.props.idplanoconvenio === 0) {
      toastr.error('Atenção', "Informe o Plano!");
      return;
    } else if (this.props.idespecialidade === 0) {
      toastr.error('Atenção', "Informe a Especialidade!");
      return;
    } else if (this.props.idmedico === 0) {
      toastr.error('Atenção', "Informe o Médico!");
      return;
    }

    this.setState({redirect: (<Redirect to="/agendamento/medico" />)});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="flex-row align-items-center">
          <Container style={{paddingBottom:30}}>
            <Row className="justify-content-center">
              <Col md="6">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <Form onSubmit={this.actionFormAgendamento.bind(this)}>
                        <h1 style={{ paddingBottom: "15px" }} >Agendamento</h1>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-handshake-o"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="select" name="selectLg" bsSize="lg" value={this.props.idconvenio}
                            onChange={this.props.selecionaConvenio}>
                            <option value="0">Selecione um Convênio</option>
                            {this.props.convenios.map((convenio) => {
                              return (
                                <option key={convenio.id_convenio} value={convenio.id_convenio}>{convenio.nm_convenio}</option>
                              );
                            })}
                          </Input>
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-address-card-o"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="select" name="selectLg" bsSize="lg" value={this.props.idplanoconvenio}
                            onChange={this.props.selecionaPlano}>
                            <option value="0">Selecione o Plano</option>
                            {this.props.planoconvenios.map((plano) => {
                              return (
                                <option key={plano.id_plano} value={plano.id_plano}>{plano.nm_plano}</option>
                              );
                            })}
                          </Input>
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-hospital-o"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="select" name="selectLg" bsSize="lg" value={this.props.idespecialidade}
                            onChange={this.props.selecionaEspecialidade}>
                            <option value="0">Selecione a Especialidade</option>
                            {this.props.especialidades.map((especialidade) => {
                              return (
                                <option key={especialidade.id_especialidade} value={especialidade.id_especialidade}>{especialidade.nm_especialidade}</option>
                              );
                            })}
                          </Input>
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-user-md"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="select" name="selectLg" bsSize="lg" value={this.props.idmedico}
                            onChange={this.props.selecionaMedico}>
                            <option value="0">Selecione o Médico</option>
                            {this.props.medicos.map((medico) => {
                              return (
                                <option key={medico.id_medico} value={medico.id_medico}>{medico.nm_medico}</option>
                              );
                            })}
                          </Input>
                        </InputGroup>
                        <Row>
                          <Col xs="12">
                            <Button color="primary" block className="px-4" ><h4>Confirmar</h4></Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
        {this.state.redirect}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  convenios: state.dadosAgendamento.convenios,
  idconvenio: state.dadosAgendamento.idconvenio,
  medicos: state.dadosAgendamento.medicos,
  idmedico: state.dadosAgendamento.idmedico,
  especialidades: state.dadosAgendamento.especialidades,
  idespecialidade: state.dadosAgendamento.idespecialidade,
  planoconvenios: state.dadosAgendamento.planoconvenios,
  idplanoconvenio: state.dadosAgendamento.idplanoconvenio,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  carregaConvenios, selecionaConvenio, selecionaPlano,
  selecionaEspecialidade, selecionaMedico
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
