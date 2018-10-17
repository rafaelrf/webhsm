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
  declaraEstarCiente, escolhendoDataConsulta, selecionaHorarioAgenda
} from '../../DadosAgendamentoActions'
import { toastr } from 'react-redux-toastr'
import moment from 'moment'
import 'moment/locale/pt-br'

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
    }else if (this.props.dataConsulta === null) {
      toastr.error('Atenção', "Escolha uma data no calendário!");
      return;
    }else if (this.props.agendaescolhida === null) {
      toastr.error('Atenção', "Escolha a data e horário da agenda do médico!");
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
                      Calendário
                    </CardHeader>
                    <CardBody style={{ height: 300 }}>
                      <Row className="justify-content-center">
                        <Calendar
                          onChange={(value) => this.props.escolhendoDataConsulta(value,this.props.convenio,this.props.medico)}
                          value={this.props.dataConsulta}
                        />
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs="12" sm="6" md="6">
                  <Card>
                    <CardHeader>
                      Datas e horários disponíveis para atendimento:
                    </CardHeader>
                    <CardBody style={{ height: 300 }}>
                      {this.montaHorariosAgenda()}
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


  montaHorariosAgenda() {
    return (
      this.props.agendasmedico.filter((item, i, ar) => (
        ar.slice(i + 1, ar.length).filter((item2) => (item2.dtreferencia === item.dtreferencia)).length === 0
      ))
        .map((agenda, index) => {
          if (index < 3) {
            let dia = moment(agenda.dtreferencia, "DD/MM/YYYY HH:mm").locale('pt-BR');
            return (
              <div key={index} >
                <Row key={index + "titulo"} className="justify-content-center" style={{ paddingBottom: 10 }}><h5>{dia.format("dddd, DD/MM/YYYY")}</h5></Row>
                <Row key={index + "horario"} className="justify-content-center" style={{ paddingBottom: 20 }}>
                  {
                    this.props.agendasmedico.filter((item) => (item.dtreferencia === agenda.dtreferencia))
                      .map((horario, i) => (
                        <Col key={i} xs="12" sm="4" md="2">
                          <Input onChange={() => this.props.selecionaHorarioAgenda(horario)} className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" />
                          <Badge style={{ fontSize: 14 }} className="mr-1" color="danger">
                            <Label className="form-check-label" check htmlFor="inline-radio2">
                              {moment(horario.hrinicon, "DD/MM/YYYY HH:mm").format("HH:mm")}
                            </Label>
                          </Badge>
                        </Col>
                      ))
                  }
                </Row>
              </div>
            )
          }
          return null;
        }
        )
    );
  }
}

const mapStateToProps = state => ({
  convenio: state.dadosAgendamento.convenio,
  medico: state.dadosAgendamento.medico,
  checkboxDeclaraCiente: state.dadosAgendamento.checkboxDeclaraCiente,
  dataConsulta: state.dadosAgendamento.dataConsulta,
  agendasmedico: state.dadosAgendamento.agendasmedico,
  agendaescolhida: state.dadosAgendamento.agendaescolhida,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  declaraEstarCiente, escolhendoDataConsulta, selecionaHorarioAgenda
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Doctor)
