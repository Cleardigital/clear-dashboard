import React, { Component } from 'react';
import MainNav from '../navigation/main/MainNav';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <div>{this.props.children}</div>
      </div>
    );
  }
}
export default MainLayout;
