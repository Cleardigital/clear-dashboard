import React, { Component } from 'react';
import './NavAccounts.css';

class NavAccounts extends Component {
  render() {
    return (
      <li className="Nav-Accounts" onClick={this.props.action}>
        <h4>{this.props.account.name}</h4>
        <img src={this.props.account.image} alt="account" />
      </li>
    );
  }
}

export default NavAccounts;
