import React, { Component } from 'react'
import {
    Button, Card, CardBody, CardGroup, Col, Container, Form, InputGroup, Row
} from 'reactstrap';

import { connect } from 'react-redux'
import moment from 'moment';

class Confirmation extends Component {

    actionFormConfirmacao(event) {
        event.preventDefault();
        //    window.location.href="/#/agendamento/medico/confirmacao/pagamento";
    }

    render() {
        return (
            <div className="animated fadeIn">
                <div className="flex-row align-items-center">
                    <Container style={{ paddingBottom: 30 }}>
                        <Row className="justify-content-center">
                            <Col md="6">
                                <CardGroup>
                                    <Card className="p-4">
                                        <CardBody>
                                            <Form onSubmit={this.actionFormConfirmacao.bind(this)}>
                                                <h2 style={{ paddingBottom: "15px" }} >Confirmação do Agendamento</h2>
                                                <InputGroup className="mb-3">
                                                    <h5>Paciente: {this.props.nomePaciente}</h5>
                                                </InputGroup>
                                                <InputGroup className="mb-4">
                                                    <h5>CPF: {this.props.cpfPaciente}</h5>
                                                </InputGroup>
                                                <InputGroup className="mb-4">
                                                    <h5>Fone: {this.props.fonePaciente}</h5>
                                                </InputGroup>
                                                <InputGroup className="mb-4">
                                                    <h5>Convênio: {this.props.convenio.nm_convenio}</h5>
                                                </InputGroup>
                                                <InputGroup className="mb-4">
                                                    <h5>Plano: {this.props.planoconvenio.nm_plano}</h5>
                                                </InputGroup>
                                                <InputGroup className="mb-4">
                                                    <h5>Especialidade: {this.props.especialidade.nm_especialidade}</h5>
                                                </InputGroup>
                                                <InputGroup className="mb-4">
                                                    <h5>Médico: {this.props.medico.nm_medico}</h5>
                                                </InputGroup>
                                                <InputGroup className="mb-4">
                                                    <h5>Data da Consulta: {moment(this.props.dataConsulta).format("DD/MM/YYYY hh:mm")}</h5>
                                                </InputGroup>                                                
                                                <Row>
                                                    <Col xs="12">
                                                        <Button color="primary" block className="px-4" ><h4>Confirmar Agenda</h4></Button>
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
            </div>
        );
    }
}

const mapStateToProps = state => ({
    convenio: state.dadosAgendamento.convenio,
    medico: state.dadosAgendamento.medico,
    especialidade: state.dadosAgendamento.especialidade,
    planoconvenio: state.dadosAgendamento.planoconvenio,
    dataConsulta: state.dadosAgendamento.dataConsulta,
    nomePaciente: state.dadosAgendamento.nomePaciente,
    cpfPaciente: state.dadosAgendamento.cpfPaciente,
    fonePaciente: state.dadosAgendamento.fonePaciente
})

export default connect(mapStateToProps)(Confirmation)