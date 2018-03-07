import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'; // eslint-disable-line no-use-before-define
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleAccountModal } from '../../../modules/user';
import { FaGoogle, FaSpotify, FaApple, FaSliders, FaCalendarO } from 'react-icons/lib/fa';
import { MdDashboard, MdMore } from 'react-icons/lib/md';

import { Avatar, Card } from 'antd';

class SideNav extends Component {
  menuClick = e => {
    if (this.props.isMin === false) {
      this.props.minimize();
    } else {
      this.props.unMinimize();
    }
  };
  clickAccount = () => {
    console.log(this.props);
    this.props.toggleAccountModal();
  };

  render() {
    return (
      <aside>
        <Card className="side-group">
          <div className="side-account" onClick={e => this.props.toggleAccountModal()}>
            <Avatar
              shape="square"
              style={{
                color: '#fff',
                backgroundColor: 'aquamarine'
              }}
              src={this.props.accountSelected !== null ? this.props.accountSelected.image : null}
            >
              RR
            </Avatar>
            <h4>{this.props.accountSelected !== null ? this.props.accountSelected.name : null}</h4>
            <p>Artist</p>
          </div>
          <NavLink exact={true} activeClassName="selected" className="side-link" to="/dashboard">
            <MdDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink activeClassName="selected" className="side-link" to="/google">
            <FaGoogle size={20} />
            <span>Google</span>
          </NavLink>
          <NavLink activeClassName="selected" className="side-link" to="/spotify">
            <FaSpotify size={20} />
            <span>Spotify</span>
          </NavLink>
          <NavLink activeClassName="selected" className="side-link" to="/apple">
            <FaApple size={20} />
            <span>Apple</span>
          </NavLink>
          <NavLink activeClassName="selected" className="side-link" to="/other">
            <MdMore size={20} />
            <span>Other</span>
          </NavLink>
          <br />
          <NavLink activeClassName="selected" className="side-link" to="/events">
            <FaCalendarO size={20} />
            <span>Events</span>
          </NavLink>
          <NavLink activeClassName="selected" className="side-link" to="/settings">
            <FaSliders size={20} />
            <span>Settings</span>
          </NavLink>
        </Card>
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  name: state.player.player_name,
  isMin: state.user.is_min,
  accountSelected: state.user.accountSelected
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleAccountModal,
      changePage: page => push(page)
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNav));
