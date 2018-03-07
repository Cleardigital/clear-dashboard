import React, { Component } from 'react';
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
    console.log('success');
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
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              <Input
                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                placeholder="Username"
                value={this.state.email}
                onChange={e => {
                  this.setState({ email: e.target.value });
                }}
              />
            </FormItem>
            <FormItem>
              <Input
                prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => {
                  this.setState({ password: e.target.value });
                }}
              />
            </FormItem>
            <FormItem>
              <Checkbox>Remember me</Checkbox>
              <a
                className="login-form-forgot"
                onClick={e => {
                  resetPassword('theenumber3@gmail.com');
                }}
              >
                Forgot password
              </a>
              <br />
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Login;
