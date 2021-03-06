import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // eslint-disable-line no-use-before-define
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TopNav from '../../components/navigation/user/TopNav';

class UserLayout extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <div className="user-layout">{this.props.children}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.user.authed,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: page => push(page),
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserLayout));
