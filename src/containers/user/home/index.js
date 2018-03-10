import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // eslint-disable-line no-use-before-define
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TiTabsOutline } from 'react-icons/lib/ti';

import { Button } from 'antd';

import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  render() {
    // const { userName, password } = this.state;

    return (
      <div className="user-home">
        <div className="user-container">
          <div className="action-bar">
            <div className="action-title">
              <TiTabsOutline size={34} color="#fff" />
              <h1>Home</h1>
              <h2>Welcome Back, {this.props.name}</h2>
            </div>
            <Button type="primary" ghost="true" size="large" onClick={this.primeClick}>
              Primary
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.user.name,
  accountSelected: state.user.accountSelected,
  linkedAccounts: state.user.linkedAccounts,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: page => push(page),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
