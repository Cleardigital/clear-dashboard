import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectAccount, addLinkedAccounts, toggleAccountModal } from '../../../modules/user';
import { Avatar, Modal, Button } from 'antd';
import { getUserInfo, getLinkedAccountsInfo } from '../../../helpers/user';

import './Select-Account.css';

class SelectAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkedAccounts: [],
    };
  }

  componentWillMount() {
    this.getAccountslinked();
  }

  getAccountslinked = () => {
    getUserInfo(this.props.userID)
      .then(res => {
        this.setState({
          linkedAccounts: res.data().linked,
        });
        this.getAccountsInfo();
      })
      .catch(error => {
        console.log('Error getting documents: ', error);
      });
  };

  getAccountsInfo = () => {
    let data = [];
    this.state.linkedAccounts.map(linkedID => {
      getLinkedAccountsInfo(linkedID)
        .then(res => {
          data.push(res.data());
        })
        .catch(error => {
          console.log('Error getting documents: ', error);
        });
    });
    setTimeout(() => {
      this.props.addLinkedAccounts(data);
    }, 500);
  };

  render() {
    return (
      <Modal
        title="Select an account"
        wrapClassName="vertical-center-modal"
        visible={this.props.accountSelected === null || this.props.showSelectAccount ? true : false}
        closable={this.props.accountSelected === null ? false : true}
        maskClosable={this.props.accountSelected === null ? false : true}
        onCancel={e => this.props.toggleAccountModal()}
        footer={null}
        width={500}
      >
        <ul className="accountsList">
          {this.props.linkedAccounts.length > 0 ? (
            this.props.linkedAccounts.map(account => (
              <li
                className="accountsModal"
                key={account.uid}
                onClick={e => {
                  this.props.selectAccount(account);
                  this.props.showSelectAccount ? this.props.toggleAccountModal() : null;
                }}
              >
                <h4>{account.name}</h4>
                <p>{account.lastUpdated}</p>
                <img src={account.image} alt="account" />
              </li>
            ))
          ) : (
            <h4>Loading...</h4>
          )}
        </ul>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  name: state.user.name,
  userID: state.user.uid,
  isMin: state.user.is_min,
  accountSelected: state.user.accountSelected,
  showSelectAccount: state.user.showSelectAccount,
  linkedAccounts: state.user.linkedAccounts,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectAccount,
      addLinkedAccounts,
      toggleAccountModal,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SelectAccount);
