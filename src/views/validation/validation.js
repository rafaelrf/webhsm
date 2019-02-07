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

//import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {confirmarAgendamento} from '../../DadosAgendamentoActions'
import moment from 'moment';

class Validation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
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
                    <Form onSubmit={(e) => this.props.confirmarAgendamento(e, this.props.dados)}>
                      <h2 style={{
                          paddingBottom: "15px"
                        }}>Confirmação do Agendamento</h2>
                      <InputGroup className="mb-3">
                        <h5>Paciente: {this.props.dados.nomePaciente}</h5>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <h5>CPF: {this.props.dados.cpfPaciente}</h5>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <h5>Fone: {this.props.dados.fonePaciente}</h5>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <h5>Convênio: {this.props.dados.convenio.nm_convenio}</h5>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <h5>Plano: {this.props.dados.planoconvenio.nm_plano}</h5>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <h5>Especialidade: {this.props.dados.especialidade.nm_especialidade}</h5>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <h5>Médico: {this.props.dados.medico.nm_medico}</h5>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <h5>Data do Atendimento: {moment(this.props.dados.agendaescolhida.dtreferencia, "DD/MM/YYYY").format("DD/MM/YYYY")
                          + " a partir das "
                          + moment(this.props.dados.agendaescolhida.hrinicon, "DD/MM/YYYY HH:mm").format("HH:mm")}</h5>
                      </InputGroup>
                      <Row>
                        <Col xs="12">
                          <Button color="primary" block="block" className="px-4">
                            <h4>Confirmar Agendamento</h4>
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
  confirmarAgendamento
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Validation)
