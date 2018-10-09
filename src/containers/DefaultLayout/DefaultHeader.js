import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo2.svg'
import sygnet from '../../assets/img/brand/logo2.svg'


export default class DefaultHeader extends Component {
  render() {

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'São Marcos' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'São Marcos' }}
        />

        <Nav className="ml-auto" navbar>
          <NavItem className="px-3">
            <span className="d-md-down-none font-weight-bold vermelho" >
              Hospital São Marcos. Para toda vida
        </span>
          </NavItem>
        </Nav>

      </React.Fragment>
    );
  }
}
