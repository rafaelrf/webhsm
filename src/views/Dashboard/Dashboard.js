import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../../assets/img/brand/logo.svg'

class Dashboard extends Component {
  render() {

    return (
      <div className="animated fadeIn">



        <div className="card">
          <div className="card-header">
            Seja Bem Vindo
          </div>
          <div className="card-body">

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={logo} height="150px" alt="Seja Bem Vindo" />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Hospital São Marcos. Para toda vida - Todos os direitos reservados 2018
            </div>

          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.auth.user })
export default connect(mapStateToProps, null)(Dashboard)
