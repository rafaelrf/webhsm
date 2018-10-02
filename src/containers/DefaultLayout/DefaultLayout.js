import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
//import navigation from '../../_nav';
import { getNav } from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';
import MyToaster from '../../util/toaster'


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
                {routes.map((route, idx) => {
                  return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                    <route.component {...props} />
                  )} />)
                    : (null);
                },
                )}
                <Redirect from="/" to="/dashboard" />
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

export default DefaultLayout;
