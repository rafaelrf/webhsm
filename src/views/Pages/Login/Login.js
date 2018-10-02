import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../../../auth/authActions'
import InputAuth from './inputAuth'

import logo from '../../../assets/img/brand/logo.svg'
import { Button, Card, CardBody, CardGroup, Container, Form, InputGroup, InputGroupAddon, InputGroupText, Row, Col } from 'reactstrap';
import MyToaster from '../../../util/toaster'
import { toastr } from 'react-redux-toastr'

class LoginFrom extends Component {

  onSubmit(values) {
    if (values["usuario"] === undefined) {
      toastr.error('Atenção', "Informe o nome do usuário!")
    } else if (values["senha"] === undefined) {
      toastr.error('Atenção', "Informe a senha!")
    } else if (values["tipo"] === undefined) {
      toastr.error('Atenção', "Informe o tipo do acesso!")
    } else {
      const { login } = this.props
      login(values)
    }
  }

  render() {
    const { handleSubmit } = this.props

    return (

      <div className="app flex-row align-items-center">

        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup className="hsm-login">
                <Card className="p-4 hsm-login-form">
                  <CardBody>
                    <Form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                      <div className="row" >
                        <div className="col-xs-7 col-sm-7 col-md-7 " >
                          <h1 className="hsm-login-titulo">Login</h1>
                          <p className="text-muted hsm-login-titulo">Faça o seu login</p>
                        </div>                        
                      </div>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field component={InputAuth} type="input" name="usuario" placeholder="Usuário" />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field component={InputAuth} type="password" placeholder="Senha" autoComplete="current-password" name="senha" />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-star"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field name="tipo" component="select" className='form-control' >
                          <option >Escolha o Grupo</option>
                          <option value="1">Médicos/Funcionários</option>
                          <option value="3">Contadores</option>
                        </Field>
                      </InputGroup>
                      <Row className="justify-content-center">
                        <Button className="px-4 hsm-login-form-btn" >Login</Button>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div className="hsm-logo-login container">
                      <img src={logo} alt="Imagem do HSM" />
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
        <MyToaster />
      </div>
    );
  }
}

LoginFrom = reduxForm({ form: 'loginFrom' })(LoginFrom)
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)
export default connect(null, mapDispatchToProps)(LoginFrom)