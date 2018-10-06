import React, { Component } from 'react'
import {
  CardHeader, Card, CardBody, Col, Container,
  Input, Label, Row
} from 'reactstrap';

import Calendar from 'react-calendar';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  declaraEstarCiente, escolhendoDataAgendamento
} from '../../DadosAgendamentoActions'

class Doctor extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <div className="flex-row align-items-center">
          <Container>
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
                      <Input className="form-check-input" type="checkbox" value={this.props.checkboxDeclaraCiente}
                        onChange={this.props.declaraEstarCiente} />
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
                  <CardBody>
                    <Row className="justify-content-center">
                      <Calendar
                        onChange={this.props.escolhendoDataAgendamento}
                        value={this.props.dataAgendamento}
                      />
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" sm="6" md="6">
                <Card>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  medico: state.dadosAgendamento.medico,
  checkboxDeclaraCiente: state.dadosAgendamento.checkboxDeclaraCiente,
  dataAgendamento: state.dadosAgendamento.dataAgendamento,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  declaraEstarCiente, escolhendoDataAgendamento
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Doctor)
