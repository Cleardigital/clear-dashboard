import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // eslint-disable-line no-use-before-define
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectAccount, minimize, unMinimize } from '../../../modules/user';
import { logout } from '../../../helpers/auth';
// import { getAccounts, getAccountInfo } from '../../../helpers/admin';

import { Input, Avatar, Badge, Modal, Timeline, Icon, Button } from 'antd';
import { MdInbox, MdArrowDropDown } from 'react-icons/lib/md';

import NavAccounts from '../../ui/user/NavAccounts.js';

const Search = Input.Search;

class HeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationVisible: false,
      infoVisible: false,
    };
  }

  // componentWillMount() {
  //   getAccounts()
  //     .then(querySnapshot => {
  //       let arr = [];
  //       querySnapshot.forEach(doc => {
  //         arr.push(doc.data());
  //       });
  //       return arr;
  //     })
  //     .then(data => {
  //       this.setState({
  //         accountsData: data
  //       });
  //     })
  //     .catch(error => {
  //       console.log('Error getting documents: ', error);
  //     });
  // }

  notificationVisible(setVis) {
    this.setState({
      notificationVisible: setVis,
    });
  }

  infoVisible(setVis) {
    this.setState({
      infoVisible: setVis,
    });
  }

  render() {
    return (
      <nav>
        <div className="nav-left">
          <Link
            className="top-logo"
            to="/"
            style={{
              width: '140px',
              margin: '0 20px',
              background: '#333',
              height: '50px',
              borderRadius: '5px',
            }}
          >
            {/* <img src="https://cleardigital.io/images/clear_wide.png" alt="cleardigital logo" /> */}
          </Link>
          <Search
            placeholder="Search"
            size="large"
            // compact={true}
            style={{ width: 300 }}
            onSearch={value => console.log(value)}
          />
        </div>
        <div className="nav-right">
          <div className="notifications" onClick={() => this.notificationVisible(true)}>
            <Badge dot={true} style={{ backgroundColor: '#6c9fee' }}>
              <MdInbox size={24} color="#C0C5D0" />
            </Badge>
          </div>
          <div className="top-user" onClick={() => this.infoVisible(true)}>
            <Avatar
              shape="square"
              style={{
                color: '#fff',
                backgroundColor: 'aquamarine',
              }}
              src={this.props.photoUrl !== null ? this.props.photoUrl : null}
            >
              RR
            </Avatar>
            {this.props.name}
            <MdArrowDropDown size={30} color="#8B8B8B" />
          </div>
        </div>
        {/* TODO: Split these damn modals out of here */}
        <Modal
          title="Notifications"
          style={{ position: 'absolute', top: 100, right: 20 }}
          visible={this.state.notificationVisible}
          onOk={() => this.notificationVisible(false)}
          onCancel={() => this.notificationVisible(false)}
          footer={null}
        >
          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">
              Technical testing 2015-09-01
            </Timeline.Item>
            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
          </Timeline>
        </Modal>

        <Modal
          title={`Welcome, ${this.props.name}`}
          style={{ position: 'absolute', top: 100, right: 20 }}
          width={300}
          visible={this.state.infoVisible}
          onOk={() => this.infoVisible(false)}
          onCancel={() => this.infoVisible(false)}
          footer={[
            <Button
              key="settings"
              type="primary"
              size="large"
              /* loading={loading} */
              onClick={e => {
                this.props.changePage('/settings');
                this.infoVisible(false);
              }}
            >
              Settings
            </Button>,
            <Button
              key="logout"
              type="primary"
              size="large"
              /* loading={loading} */
              onClick={e => {
                e.preventDefault();
                logout();
              }}
            >
              Logout
            </Button>,
          ]}
        >
          {this.props.linkedAccounts.length >= 1 ? (
            this.props.linkedAccounts.map(account => (
              <NavAccounts
                key={account.uid}
                account={account}
                action={() => {
                  this.props.selectAccount(account);
                  this.infoVisible(false);
                }}
              />
            ))
          ) : (
            <h4>Loading...</h4>
          )}
        </Modal>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  name: state.user.name,
  email: state.user.email,
  photoUrl: state.user.photoUrl,
  isMin: state.user.is_min,
  account: state.accountSelected,
  linkedAccounts: state.user.linkedAccounts,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      minimize,
      unMinimize,
      selectAccount,
      changePage: page => push(page),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
