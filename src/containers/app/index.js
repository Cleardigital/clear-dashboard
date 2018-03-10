import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'; // eslint-disable-line no-use-before-define
import { bindActionCreators } from 'redux';
import { ConnectedRouter, push } from 'react-router-redux';
import { connect } from 'react-redux';
import { history } from '../../store';
import { firebaseAuth } from '../../config/constants';
import { logIn, logOut } from '../../modules/user';
import { notification, message } from 'antd';

import PublicLayout from '../../components/layouts/PublicLayout';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import UserLayout from '../../components/layouts/UserLayout';

import Login from '../public/login';

import Home from '../user/home';

import Dashboard from '../dashboard/dashboard';
import Google from '../dashboard/google';
import Spotify from '../dashboard/spotify';
import Apple from '../dashboard/apple';
import Other from '../dashboard/other';
import Settings from '../dashboard/settings';

const openNotification = ({ type, message, description, duration }) => {
  notification[type]({
    message,
    description,
    duration,
  });
};

const openMessage = ({ type, content, duration }) => {
  message[type](content, duration);
};

const PublicRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === false ? (
        <PublicLayout>
          <Component setNotification={openNotification} setMessage={openMessage} {...props} />
        </PublicLayout>
      ) : (
        <Redirect to="/" />
      )}
  />
);

const UserRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === true ? (
        <UserLayout>
          <Component setNotification={openNotification} setMessage={openMessage} {...props} />
        </UserLayout>
      ) : (
        <Redirect to="/login" />
      )}
  />
);

const DashboardRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === true ? (
        <DashboardLayout>
          <Component setNotification={openNotification} setMessage={openMessage} {...props} />
        </DashboardLayout>
      ) : (
        <Redirect to="/login" />
      )}
  />
);

class Main extends Component {
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.props.logIn(user.displayName, user.email, user.photoURL, user.uid);
        this.props.changePage('/');
      } else {
        this.props.logOut();
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <ConnectedRouter basename="/member" history={history}>
        <Switch>
          <PublicRoute authed={this.props.authed} path="/login" component={Login} />

          <UserRoute exact authed={this.props.authed} path="/" component={Home} />

          <DashboardRoute authed={this.props.authed} path="/dashboard" component={Dashboard} />
          <DashboardRoute authed={this.props.authed} path="/google" component={Google} />
          <DashboardRoute authed={this.props.authed} path="/spotify" component={Spotify} />
          <DashboardRoute authed={this.props.authed} path="/apple" component={Apple} />
          <DashboardRoute authed={this.props.authed} path="/other" component={Other} />
          <DashboardRoute authed={this.props.authed} path="/settings" component={Settings} />

          <Route path="*" render={() => <div>Not Found</div>} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = state => ({
  name: state.user.name,
  email: state.user.email,
  authed: state.user.authed,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logIn,
      logOut,
      changePage: page => push(page),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Main);
