import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // eslint-disable-line no-use-before-define
import { login, resetPassword } from '../../../helpers/auth';
import { Modal, Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('Logging in: ', this.state.email, this.state.password);
    login(this.state.email, this.state.password).catch(error => {
      // this.setState(setErrorMsg('Invalid username/password.'));
      console.log('err', error);
    });
    console.log('success?');
  };

  render() {
    return (
      <div className="landingWrapper">
        <Modal
          title="Login Modal"
          visible={this.props.isLogin}
          onCancel={this.props.closeModal}
          width={350}
          footer={null}
        >
          <Form onSubmit={this.handleSubmit}>
            <FormItem label="E-mail" hasFeedback>
              <Input />
            </FormItem>
            <FormItem label="Password" hasFeedback>
              <Input type="password" />
            </FormItem>
            <FormItem label="Confirm Password" hasFeedback>
              <Input type="password" onBlur={this.handleConfirmBlur} />
            </FormItem>

            <FormItem label="Phone Number">
              <Input addonBefore="+1" style={{ width: '100%' }} />
            </FormItem>
            <FormItem style={{ marginBottom: 8 }}>
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Login;
