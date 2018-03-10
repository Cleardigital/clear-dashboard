import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // eslint-disable-line no-use-before-define
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TiTabsOutline, TiChartPieOutline } from 'react-icons/lib/ti';
import { FaSliders } from 'react-icons/lib/fa';
import { GoInfo, GoOrganization } from 'react-icons/lib/go';

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
              <TiTabsOutline size={36} color="#252739" />
              <h1>Home</h1>
              <h2>Welcome Back, {this.props.name}</h2>
            </div>
            <div className="action-buttons">
              <Button type="primary" ghost="true" size="large">
                Secondary
              </Button>
              <Button type="primary" size="large">
                Primary
              </Button>
            </div>
          </div>
          <div className="user-flex">
            <Link to="dashboard">
              <article>
                <TiChartPieOutline size={34} color="#252739" />
                <h1>Dashboard</h1>
                <p>Et repellendus quia at iure aspernatur magni natus.</p>
              </article>
            </Link>
            <Link to="dashboard">
              <article>
                <GoOrganization size={34} color="#252739" />
                <h1>Accounts</h1>
                <p>Et repellendus quia at iure aspernatur magni natus.</p>
              </article>
            </Link>
            <Link to="settings">
              <article>
                <FaSliders size={34} color="#252739" />
                <h1>Settings</h1>
                <p>Et repellendus quia at iure aspernatur magni natus.</p>
              </article>
            </Link>
            <Link to="dashboard">
              <article>
                <GoInfo size={34} color="#252739" />
                <h1>Help</h1>
                <p>Et repellendus quia at iure aspernatur magni natus.</p>
              </article>
            </Link>
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
