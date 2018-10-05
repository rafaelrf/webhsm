import React, { Component } from 'react';
import {
  Card, CardBody, CardHeader, Col, Row, Table,
  Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Collapse,
  Container
} from 'reactstrap';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  carregaSolicitacaoExames, carregaExamesDaSolicitacao, fecharModalListaExames,
  datainicioChanged, datafimChanged, carregaConvenios, selecionaConvenio, selecionaExame
} from '../SolicitacaoExames/solExamesActions'

import {
  HSMTabela, HSMColuna
} from '../../hsm-componentes/componentes';

class SolicitacaoExames extends Component {

  componentWillMount() {
    this.props.carregaConvenios();
  }

  render() {
    return (
      <div className="solicitacaoexames">
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Solicitações de Exames
                </CardHeader>
                <CardBody>
                  <Card>
                    <CardBody>
                      <Form onSubmit={(e) => this.props.carregaSolicitacaoExames(e, this.props)} inline>
                        <FormGroup className="pr-1">
                          <Label htmlFor="exampleInputName2" className="pr-1">Name</Label>
                          <Input type="date" id="date-input-inicio" name="date-input-inicio" placeholder="date" required
                            value={this.props.datainicio} onChange={this.props.datainicioChanged} />
                        </FormGroup>
                        <FormGroup className="pr-1">
                          <Label htmlFor="exampleInputEmail2" className="pr-1">Email</Label>
                          <Input type="date" id="date-input-fim" name="date-input-fim" placeholder="date" required
                            value={this.props.datafim} onChange={this.props.datafimChanged} />
                        </FormGroup>
                        <FormGroup className="pr-1">
                          <Label for="selectConvenio">Convênio:</Label>
                          <Input type="select" name="select" value={this.props.idConvenio}
                            onChange={this.props.selecionaConvenio}>
                            {this.props.convenios.map((convenio, index) => {
                              return (
                                <option key={index} value={convenio.id_convenio}>{convenio.nm_convenio}</option>
                              );
                            })}
                          </Input>
                        </FormGroup>

                        <FormGroup className="pr-1">
                          <Button type="submit" color="danger"><i className="fa fa-refresh"></i> Atualizar</Button>
                        </FormGroup>
                      </Form>

                    </CardBody>
                  </Card>

                  {
                    (this.props.carregandoSolicitacao === true) ?
                      <div className="hsm-carregando-body">
                        <span className="timer-loader">Carregando...</span>
                      </div>
                      :
                      <HSMTabela value={this.props.solicitacoesexames}
                        onClick={this.props.carregaExamesDaSolicitacao}
                        filenameExcel="SolicitacaoExames"
                        size="sm" >
                        <HSMColuna cabecalho="Paciente" campo="nm_paciente" />
                        <HSMColuna mascara="DD/MM/YYYY" cabecalho="Data Solic." campo="dt_solicitacao" />
                        <HSMColuna cabecalho="Local" campo="local" />
                        <HSMColuna cabecalho="Convênio" campo="nm_convenio" />
                        <HSMColuna cabecalho="Médico Solicitante" campo="nm_medico" />
                        <HSMColuna cabecalho="Solicitação" campo="id_solicitacao" />
                        <HSMColuna cabecalho="Admissão" campo="id_admissao" />
                      </HSMTabela>
                  }

                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>

        {this.modalCarregaListaExames()}
      </div>
    );
  }

  modalCarregaListaExames() {
    return (
      <div className="modal-carrega-lista-xames">
        <Modal isOpen={this.props.modalListaExames}
          className={'modal-lg ' + this.props.className}>
          <ModalHeader>Lista de Exames</ModalHeader>
          <ModalBody>
            {
              (this.props.carregandoExames === true) ?
                <div className="hsm-carregando-body">
                  <span className="timer-loader">Carregando...</span>
                </div>
                :
                this.montatabeladelistadeexames()
            }
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.printExames.bind(this)}>Imprimir</Button>{' '}
            <Button color="secondary" onClick={this.props.fecharModalListaExames}>Voltar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  printExames() {
    if (this.props.selectedExame.url !== undefined) {
      window.open(this.props.selectedExame.url);
    }
  }

  montatabeladelistadeexames() {
    return (
      <Table responsive size="sm">
        <thead>
          <tr>
            <th>Exame</th>
          </tr>
        </thead>
        <tbody>
          {this.props.exames.map((exame) => {
            return (
              <tr key={exame.id_exame}>
                <td>
                  <h6 onClick={() => this.props.selecionaExame(exame)}
                    style={{ background: (exame.fl_printcentral) ? "bisque" : "none" }}>{exame.nm_exame}</h6>
                  <Collapse isOpen={this.props.collapsesExame === exame.id_exame} >
                    <Container>
                      <h6>Justificativa</h6>
                      <p className="mb-3">
                        {exame.justificativa}
                      </p>
                    </Container>
                  </Collapse>
                </td>
              </tr>
            );
          })}

        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  solicitacoesexames: state.solicitacaoexames.solicitacoesexames,
  carregandoSolicitacao: state.solicitacaoexames.carregandoSolicitacao,
  selectedSolExame: state.solicitacaoexames.selectedSolExame,
  selectedExame: state.solicitacaoexames.selectedExame,
  exames: state.solicitacaoexames.exames,
  carregandoExames: state.solicitacaoexames.carregandoExames,
  modalListaExames: state.solicitacaoexames.modalListaExames,
  datainicio: state.solicitacaoexames.datainicio,
  datafim: state.solicitacaoexames.datafim,
  collapsesExame: state.solicitacaoexames.collapsesExame,
  convenios: state.solicitacaoexames.convenios,
  idConvenio: state.solicitacaoexames.idConvenio
})

const mapDispatchToProps = dispatch => bindActionCreators({
  carregaSolicitacaoExames, carregaExamesDaSolicitacao,
  datainicioChanged, datafimChanged, fecharModalListaExames,
  carregaConvenios, selecionaConvenio, selecionaExame
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SolicitacaoExames)
