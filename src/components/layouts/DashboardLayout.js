import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // eslint-disable-line no-use-before-define
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { minimize, unMinimize } from '../../modules/user';
import TopNav from '../../components/navigation/user/TopNav';
import SideNav from '../../components/navigation/user/SideNav';
import SelectAccount from '../navigation/user/Select-Account';

class DashboardLayout extends Component {
  render() {
    let mainClass = '';
    if (this.props.isMin) mainClass += 'min';
    return (
      <div>
        <TopNav />
        <SideNav />
        <main className={mainClass}>{this.props.children}</main>
        <SelectAccount />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.user.authed,
  isMin: state.user.is_min,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      minimize,
      unMinimize,
      changePage: page => push(page),
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardLayout));
