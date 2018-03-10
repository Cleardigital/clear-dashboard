import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // eslint-disable-line no-use-before-define
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { login, resetPassword } from '../../../helpers/auth';

import './login.css';
const FormItem = Form.Item;

class NormalLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Logging in: ', values.email, values.password);
      if (!err) {
        login(values.email, values.password).catch(error => {
          // this.setState(setErrorMsg('Invalid username/password.'));
          console.log('err', error);
        });
        console.log('success');
      }
    });
  };

  render() {
    // const { userName, password } = this.state;
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="login-wrapper">
        <div className="form">
          <div className="social-btn">
            <div className="social-icon-wrapper">
              <img
                className="social-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google icon"
              />
            </div>
            <p className="btn-text">
              <b>Log in with google</b>
            </p>
          </div>
          <div className="social-btn">
            <div className="social-icon-wrapper">
              <img
                className="social-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/267px-F_icon.svg.png"
                alt="facebook icon"
              />
            </div>
            <p className="btn-text">
              <b>Log in with facebook</b>
            </p>
          </div>
          <div className="line-cut">
            <span className="text-cut">or</span>
          </div>
          <Form onSubmit={this.handleSubmit} className="form-login">
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email!' }],
              })(
                <Input
                  size="large"
                  prefix={<Icon type="mail" style={{ fontSize: '16px', color: 'rgba(0,0,0,.25)' }} />}
                  type="email"
                  placeholder="Email"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  size="large"
                  prefix={<Icon type="lock" style={{ fontSize: '16px', color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem className="form-options">
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: false,
              })(<Checkbox>Remember me</Checkbox>)}
              <a
                className="login-form-forgot"
                onClick={e => {
                  resetPassword('theenumber3@gmail.com');
                }}
              >
                Forgot password
              </a>
              <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </FormItem>
          </Form>
          <div className="form-register">
            No account yet? <Link to="/register">Sign up for free!</Link>
          </div>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
