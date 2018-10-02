import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo2.svg'
import sygnet from '../../assets/img/brand/logo2.svg'

import { logout } from '../../auth/authActions'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'São Marcos' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'São Marcos' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <span className="d-md-down-none font-weight-bold vermelho" >
          Hospital São Marcos. Para toda vida
        </span>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink href="#/dashboard">{this.props.user.usuario}</NavLink>
          </NavItem>
          <NavItem className="px-3">

            <NavLink href="#/" onClick={this.props.logout}  >Sair</NavLink>
          </NavItem>
        </Nav>

      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DefaultHeader)