import React, {Component} from 'react'
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  InputGroup,
  Row
} from 'reactstrap';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import moment from 'moment';

class Confirmation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  actionFormConfirmacao (event){
    event.preventDefault();
    window.location.reload();
  }

  render() {
    return (<div className="animated fadeIn">
      <div className="flex-row align-items-center">
        <Container style={{
            paddingBottom: 30
          }}>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={(e) => this.actionFormConfirmacao(e)}>
                      <h2 style={{
                          paddingBottom: "15px"
                        }}>Agendamento Confirmado</h2>
                      <InputGroup className="mb-3">
                        <h5>Paciente: {this.props.dados.nomePaciente}</h5>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <h5>Especialidade: {this.props.dados.especialidade.nm_especialidade}</h5>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <h5>Médico: {this.props.dados.medico.nm_medico}</h5>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <h5>Data do Atendimento: {moment(this.props.dados.agendaescolhida.dtreferencia, "DD/MM/YYYY").format("DD/MM/YYYY")
                          + " A partir das "
                          + moment(this.props.dados.agendaescolhida.hrinicon, "DD/MM/YYYY HH:mm").format("HH:mm")+" - "
                          + moment(this.props.dados.agendaescolhida.hrtercon, "DD/MM/YYYY HH:mm").format("HH:mm")}</h5>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <h5>Caso paciente não possa comparecer à consulta. Por favor, entrar em contato com o hospital:</h5>
                        <h5> Telefone: (86) 2106-8262 </h5>
                        <h5> Horário: 14h às 17h</h5>
                      </InputGroup>
                      <Row>
                        <Col xs="12">
                          <Button color="primary" block="block" className="px-4">
                            <h4>Finalizar</h4>
                          </Button>
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
    </div>);
  }
}

const mapStateToProps = state => ({dados: state.dadosAgendamento})
const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)
