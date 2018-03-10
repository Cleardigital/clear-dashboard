import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { firebaseAuth, db } from '../../../config/constants';

import { FaSliders } from 'react-icons/lib/fa';
import { Form, Input, Button, Card } from 'antd';
const FormItem = Form.Item;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      imageUrl: null,
      phoneNumber: null,
      currentUser: firebaseAuth().currentUser
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.name, this.state.phoneNumber, this.state.imageUrl);
    this.state.currentUser
      .updateProfile({
        displayName: this.state.name,
        photoURL: this.state.imageUrl
      })
      .then(() => {
        // Update successful.
        console.log('success!');
      })
      .catch(error => {
        // An error happened.
        console.log('err: ', error);
      });
  };

  onPrimaryClick = () => {
    db
      .collection('users')
      .get()
      .then(function(querySnapshot) {
        console.log('Data: ', querySnapshot);
        querySnapshot.forEach(doc => {
          console.log(doc.id, ' => ', doc.data());
        });
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
  };

  render() {
    return (
      <div className="dash-container">
        <div className="action-bar">
          <div className="action-title">
            <FaSliders size={34} color="#252739" />
            <h1>User Settings</h1>
            <h2>Update Info, Change Password, etc.</h2>
          </div>
          <div>
            <Button type="primary" size="large" onClick={this.onPrimaryClick}>
              Primary
            </Button>
          </div>
        </div>
        <Card title="Account Info" bordered={false} style={{ width: 300 }}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem label="Name">
              <Input
                type="text"
                value={this.state.name}
                onChange={e => {
                  this.setState({ name: e.target.value });
                }}
              />
            </FormItem>
            <FormItem label="Phone Number">
              <Input
                addonBefore={'+1'}
                type="number"
                value={this.state.phoneNumber}
                onChange={e => {
                  this.setState({ phoneNumber: e.target.value });
                }}
              />
            </FormItem>
            <FormItem label="Profile Image">
              <Input
                type="text"
                value={this.state.imageUrl}
                onChange={e => {
                  this.setState({ imageUrl: e.target.value });
                }}
              />
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">
                Update Profile
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({ name: state.user.name });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: page => push(page)
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
