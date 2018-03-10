import React, { Component } from 'react';
// import { Link } from 'react-router-dom'; // eslint-disable-line no-use-before-define
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { logout } from '../../../helpers/auth';

// import Login from '../../ui/modal/Login';

import './PublicNav.css';

class PublicNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationVisible: false,
      isLogin: false,
    };
  }

  toggleLogin = e => {
    let not = !this.state.isLogin;
    this.setState({
      isLogin: not,
    });
  };

  render() {
    return (
      <nav className="main-nav">
        <a href="/">
          <img className="main-logo" src="https://cleardigital.io/images/clear_wide.png" alt="Clear Digital Logo" />
        </a>
        {/* <div className="main-link-wrapper">
            <Link to="/" className="main-link">
              Home
            </Link>
            <Link to="/about" className="main-link">
              About
            </Link>

            {this.props.authed === true ? (
              <span>
                <Link to="/" className="main-link">
                  Dashboard
                </Link>
                <a
                  className="main-login"
                  onClick={e => {
                    e.preventDefault();
                    logout();
                  }}
                >
                  Logout
                </a>
              </span>
            ) : (
              <a className="main-login" onClick={this.toggleLogin}>
                Login
              </a>
            )}
          </div> */}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  name: state.user.name,
  authed: state.user.authed,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: page => push(page),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PublicNav);
