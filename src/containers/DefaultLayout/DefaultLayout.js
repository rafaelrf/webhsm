import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppBreadcrumb,
  AppFooter,
  AppHeader
} from '@coreui/react';
// sidebar nav config
//import navigation from '../../_nav';
import { getNav } from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';
import MyToaster from '../../util/toaster'
import { connect } from 'react-redux'

class DefaultLayout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      navData: { "items": [] },
    };
  }
  componentDidMount() {
    this.setState({ navData: { "items": getNav() } })
  }

  validedRoutes() {
    return (
      routes.map((route, idx) => {

        if (route.name === "Médico" && (this.props.idconvenio === 0 || this.props.idmedico === 0
          || this.props.idespecialidade === 0 || this.props.idplanoconvenio === 0)) {

          return (null);
        }

        if (route.name === "Paciente" && !(this.props.checkboxDeclaraCiente)) {

          return (null);
        }

        if (route.name === "Confirmação do Agendamento" && (this.props.idconvenio === 0 || this.props.idmedico === 0
          || this.props.idespecialidade === 0 || this.props.idplanoconvenio === 0
          || this.props.nomePaciente === "" || this.props.cpfPaciente.replace('.', '').replace('.', '').replace('-', '') === ""
          || this.props.fonePaciente === "")) {
          return (null);
        }

        return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
          <route.component {...props} />
        )} />) : (null);

      },
      )
    );
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className="app-body">
          <main className="main">
            <AppBreadcrumb appRoutes={routes} />
            <Container fluid>
              <Switch>
                {this.validedRoutes()}
                <Redirect from="/" to="/agendamento" />
              </Switch>
            </Container>
          </main>
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
        <MyToaster />
      </div>
    );
  }
}

//export default DefaultLayout;

const mapStateToProps = state => ({
  idconvenio: state.dadosAgendamento.idconvenio,
  idmedico: state.dadosAgendamento.idmedico,
  idespecialidade: state.dadosAgendamento.idespecialidade,
  idplanoconvenio: state.dadosAgendamento.idplanoconvenio,
  checkboxDeclaraCiente: state.dadosAgendamento.checkboxDeclaraCiente,
  nomePaciente: state.dadosAgendamento.nomePaciente,
  cpfPaciente: state.dadosAgendamento.cpfPaciente,
  fonePaciente: state.dadosAgendamento.fonePaciente,
})

export default connect(mapStateToProps)(DefaultLayout)
