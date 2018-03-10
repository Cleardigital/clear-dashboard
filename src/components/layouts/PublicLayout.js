import React, { Component } from 'react';
import PublicNav from '../navigation/public/PublicNav';

class PublicLayout extends Component {
  render() {
    return (
      <div>
        <PublicNav />
        <div>{this.props.children}</div>
      </div>
    );
  }
}
export default PublicLayout;
