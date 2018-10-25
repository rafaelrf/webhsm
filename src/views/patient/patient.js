import React, { Component } from 'react'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import InputMask from 'react-input-mask';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import {
    nomePacienteChange, cpfPacienteChange, fonePacienteChange,
} from '../../DadosAgendamentoActions'
import { toastr } from 'react-redux-toastr'
import { validaCPF } from '../../util/validacpf'

class Patient extends Component {

    constructor(props) {
        super(props)
        this.state = { redirect: false }
    }

    actionFormPaciente(event) {
        event.preventDefault();

        let cpf = this.props.cpfPaciente.replace('.','').replace('.','').replace('-','')

        if (this.props.nomePaciente === "") {
            toastr.error('Atenção', "Informe o nome do Paciente!");
            return;
        } else if (cpf === "") {
            toastr.error('Atenção', "Informe o CPF do Paciente!");
            return;
        } else if (!validaCPF(cpf)) {
            toastr.error('Atenção', "Informe um CPF válido!");
            return;
        } else if (this.props.fonePaciente === "") {
            toastr.error('Atenção', "Informe o Telefone do Paciente!");
            return;
        }
        this.props.history.push("/agendamento/medico/paciente/confirmacao")

        // this.setState({redirect: (<Redirect to={{
        //           pathname: "/agendamento/medico/paciente/confirmacao",
        //           state: { from: this.props.location }
        //         }} />)})
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
                                            <Form onSubmit={this.actionFormPaciente.bind(this)}>
                                                <h1 style={{ paddingBottom: "15px" }} >Paciente</h1>
                                                <InputGroup className="mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="icon-user"></i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input type="text" id="namePaciente" value={this.props.nomePaciente} required
                                                        onChange={this.props.nomePacienteChange} placeholder="Nome do Paciente" />
                                                </InputGroup>
                                                <InputGroup className="mb-4">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="fa fa-address-card-o"></i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <InputMask mask="999.999.999-99" id="cpfPaciente" value={this.props.cpfPaciente} required
                                                        onChange={this.props.cpfPacienteChange} placeholder="CPF do Paciente" className="form-control" />
                                                </InputGroup>
                                                <InputGroup className="mb-4">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="icon-phone icons"></i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <InputMask mask="(99) 9.9999-9999" id="telefonePaciente" value={this.props.fonePaciente} required
                                                        onChange={this.props.fonePacienteChange} placeholder="Telefone do Paciente" className="form-control" />
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
    nomePaciente: state.dadosAgendamento.nomePaciente,
    cpfPaciente: state.dadosAgendamento.cpfPaciente,
    fonePaciente: state.dadosAgendamento.fonePaciente,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    nomePacienteChange, cpfPacienteChange, fonePacienteChange,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Patient)
