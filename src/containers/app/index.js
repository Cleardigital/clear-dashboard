import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'; // eslint-disable-line no-use-before-define
import { bindActionCreators } from 'redux';
import { ConnectedRouter, push } from 'react-router-redux';
import { connect } from 'react-redux';
import { history } from '../../store';
import { firebaseAuth } from '../../config/constants';
import { logIn, logOut } from '../../modules/user';
import { notification, message } from 'antd';

import MainLayout from '../../components/layouts/MainLayout';
import UserLayout from '../../components/layouts/UserLayout';

import Home from '../public/home';

import Dashboard from '../user/dashboard';
import Google from '../user/google';
import Spotify from '../user/spotify';
import Apple from '../user/apple';
import Other from '../user/other';
import Settings from '../user/settings';

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

const MainRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <MainLayout>
        <Component setNotification={openNotification} setMessage={openMessage} {...props} />
      </MainLayout>
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
        <Redirect to="/?redirect=Login" />
      )}
  />
);

class Main extends Component {
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.props.logIn(user.displayName, user.email, user.photoURL, user.uid);
        this.props.changePage('/dashboard');
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
          <MainRoute exact path="/" component={Home} />

          <UserRoute authed={this.props.authed} path="/dashboard" component={Dashboard} />
          <UserRoute authed={this.props.authed} path="/google" component={Google} />
          <UserRoute authed={this.props.authed} path="/spotify" component={Spotify} />
          <UserRoute authed={this.props.authed} path="/apple" component={Apple} />
          <UserRoute authed={this.props.authed} path="/other" component={Other} />
          <UserRoute authed={this.props.authed} path="/settings" component={Settings} />

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
