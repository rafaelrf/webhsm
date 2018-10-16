import React, { Component } from 'react'
import {
  CardHeader, Card, CardBody, Col, Container,
  Input, Label, Row, Badge, Button, Form
} from 'reactstrap';

import Calendar from 'react-calendar';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Redirect } from 'react-router-dom';

import {
  declaraEstarCiente, escolhendoDataConsulta
} from '../../DadosAgendamentoActions'
import { toastr } from 'react-redux-toastr'
import moment from 'moment'

class Doctor extends Component {

  constructor(props) {
    super(props)
    this.state = { redirect: false }
  }

  actionFormMedico(event) {
    event.preventDefault();

    if (!this.props.checkboxDeclaraCiente) {
      toastr.error('Atenção', "Informe se Declara estar Ciente!");
      return;
    }

    this.setState({ redirect: (<Redirect to="/agendamento/medico/paciente" />) });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="flex-row align-items-center">
          <Container>
            <Form onSubmit={this.actionFormMedico.bind(this)}>
              <Row className="justify-content-center">
                <Col md="8">
                  <Card>
                    <CardHeader>
                      <h3>DR(a):{"  " + this.props.medico.nm_medico}</h3>
                    </CardHeader>
                    <CardBody>
                      <Row className="justify-content-center">
                        <h5>Observações</h5>
                      </Row>

                      <p>Diante da possibilidade da confirmação de doenças de alto risco à saúde, tem sido comum negativas de operadoras de planos de saúde em realizar alguns tipos de exames e procedimentos médicos de valores mais elevados.</p>

                      <div style={{ marginLeft: 15 }}>
                        <Input checked={this.props.checkboxDeclaraCiente} className="form-check-input" type="checkbox"
                          onChange={() => this.props.declaraEstarCiente(this.props.checkboxDeclaraCiente)} />
                        <Label check >
                          Declaro estar ciente das condições acima para a realização da consulta
                        </Label>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6" md="6">
                  <Card>
                    <CardHeader>
                      Datas e horários disponíveis para atendimento:
                  </CardHeader>
                    <CardBody style={{ height: 300 }}>
                      <Row className="justify-content-center">
                        <Calendar
                          onChange={this.props.escolhendoDataConsulta}
                          value={this.props.dataConsulta}
                        />
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs="12" sm="6" md="6">
                  <Card>
                    <CardBody style={{ height: 346 }}>

                      {this.props.agendasmedico.map((agenda, index) => {
                        return (
                          <Row key={index}
                            className="justify-content-center" style={{ paddingBottom: 10 }}><h5>{moment(agenda.inicioconsulta, "DD/MM/YYYY hh:mm").format("DD/MM/YYYY")}</h5></Row>
                        );
                      })}

                      <Row className="justify-content-center" style={{ paddingBottom: 10 }}><h5>Segunda, 10/09/2018</h5></Row>
                      <Row className="justify-content-center" style={{ paddingBottom: 20 }}>
                        <Col xs="12" sm="4" md="2">
                          <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" />
                          <Badge style={{ fontSize: 14 }} className="mr-1" color="danger"><Label className="form-check-label" check htmlFor="inline-radio2">9:00</Label></Badge>
                        </Col>
                        <Col xs="12" sm="4" md="2">
                          <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" />
                          <Badge style={{ fontSize: 14 }} className="mr-1" color="danger"><Label className="form-check-label" check htmlFor="inline-radio2">14:00</Label></Badge>
                        </Col>
                      </Row>
                      <Row className="justify-content-center" style={{ paddingBottom: 10 }}><h5>Quarta, 11/09/2018</h5></Row>
                      <Row className="justify-content-center" style={{ paddingBottom: 20 }}>
                        <Col xs="12" sm="4" md="2">
                          <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" />
                          <Badge style={{ fontSize: 14 }} className="mr-1" color="danger"><Label className="form-check-label" check htmlFor="inline-radio2">9:00</Label></Badge>
                        </Col>
                        <Col xs="12" sm="4" md="2">
                          <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" />
                          <Badge style={{ fontSize: 14 }} className="mr-1" color="danger"><Label className="form-check-label" check htmlFor="inline-radio2">13:00</Label></Badge>
                        </Col>
                      </Row>
                      <Row className="justify-content-center" style={{ paddingBottom: 10 }}><h5>Sexta, 14/09/2018</h5></Row>
                      <Row className="justify-content-center" style={{ paddingBottom: 20 }}>
                        <Col xs="12" sm="4" md="2">
                          <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" />
                          <Badge style={{ fontSize: 14 }} className="mr-1" color="danger"><Label className="form-check-label" check htmlFor="inline-radio2">9:00</Label></Badge>
                        </Col>
                        <Col xs="12" sm="4" md="2">
                          <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" />
                          <Badge style={{ fontSize: 14 }} className="mr-1" color="danger"><Label className="form-check-label" check htmlFor="inline-radio2">14:00</Label></Badge>
                        </Col>
                        <Col xs="12" sm="4" md="2">
                          <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" />
                          <Badge style={{ fontSize: 14 }} className="mr-1" color="danger"><Label className="form-check-label" check htmlFor="inline-radio2">16:30</Label></Badge>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              <Row className="justify-content-center" style={{ paddingBottom: 30 }}>
                <Col xs="6" className="justify-content-center">
                  <Button color="primary" block className="px-4" ><h4>Confirmar Médico</h4></Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
        {this.state.redirect}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  medico: state.dadosAgendamento.medico,
  checkboxDeclaraCiente: state.dadosAgendamento.checkboxDeclaraCiente,
  dataConsulta: state.dadosAgendamento.dataConsulta,
  agendasmedico: state.dadosAgendamento.agendasmedico,
  agendaescolhida: state.dadosAgendamento.agendasmedico,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  declaraEstarCiente, escolhendoDataConsulta
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Doctor)
