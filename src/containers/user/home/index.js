import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // eslint-disable-line no-use-before-define
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TiTabsOutline, TiChartPieOutline } from 'react-icons/lib/ti';
import {
  FaSliders,
  FaCubes,
  FaCube,
  FaBuildingO,
  FaUserSecret,
  FaConnectdevelop,
  FaYoutubePlay,
} from 'react-icons/lib/fa';
import { GoInfo, GoOrganization } from 'react-icons/lib/go';

import { Button, Row, Col, Select } from 'antd';

import './home.css';
const Option = Select.Option;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  render() {
    // const { userName, password } = this.state;

    return (
      <div>
        <div className="user-options">
          <div className="user-container">
            <div className="action-bar">
              <div className="action-title">
                <TiTabsOutline size={36} color="#252739" />
                <h1>Home</h1>
                <h2>Welcome Back, {this.props.name}</h2>
              </div>
              <div className="action-buttons">
                <Button type="primary" ghost="true" size="large">
                  Secondary
                </Button>
                <Button type="primary" size="large">
                  Primary
                </Button>
              </div>
            </div>
            <div className="user-flex">
              <Link to="dashboard">
                <article>
                  <TiChartPieOutline size={34} color="#252739" />
                  <h1>Dashboard</h1>
                  <p>Et repellendus quia at iure aspernatur magni natus.</p>
                </article>
              </Link>
              <Link to="dashboard">
                <article>
                  <GoOrganization size={34} color="#252739" />
                  <h1>Accounts</h1>
                  <p>Et repellendus quia at iure aspernatur magni natus.</p>
                </article>
              </Link>
              <Link to="settings">
                <article>
                  <FaSliders size={34} color="#252739" />
                  <h1>Settings</h1>
                  <p>Et repellendus quia at iure aspernatur magni natus.</p>
                </article>
              </Link>
              <Link to="dashboard">
                <article>
                  <GoInfo size={34} color="#252739" />
                  <h1>Help</h1>
                  <p>Et repellendus quia at iure aspernatur magni natus.</p>
                </article>
              </Link>
            </div>
          </div>
        </div>

        <div className="user-body">
          <div className="action-bar">
            <div className="action-title">
              <FaBuildingO size={36} color="#252739" />
              <h1>Getting Started</h1>
            </div>
            <div className="action-buttons">
              {/* <Button type="primary" ghost="true" size="large">
                Secondary
              </Button>
              <Button type="primary" size="large">
                Primary
              </Button> */}
              <Select
                placeholder="Resources"
                style={{ width: 120 }}
                onChange={e => {
                  console.log('pizza');
                }}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </div>
          <Row
            gutter={16}
            type="flex"
            align="middle"
            style={{
              padding: '40px 0',
            }}
          >
            <Col span={8}>
              <div className="walk-title">
                <FaCubes size={36} color="#252739" />
                <h1>The Services</h1>
                <p>
                  Ea asperiores magnam. Magni qui quae voluptatem tenetur corporis ab unde rerum et. Voluptas quia
                  itaque beatae. Possimus iusto sunt consectetur sunt.
                </p>
              </div>
            </Col>
            <Col span={16}>
              <div className="user-flex walk-flex">
                <Link to="dashboard">
                  <article>
                    <FaConnectdevelop size={34} color="#252739" />
                    <h1>Distribution</h1>
                    <p>Et repellendus quia at iure aspernatur magni natus.</p>
                  </article>
                </Link>
                <Link to="dashboard">
                  <article>
                    <FaYoutubePlay size={34} color="#252739" />
                    <h1>Monetization</h1>
                    <p>Et repellendus quia at iure aspernatur magni natus.</p>
                  </article>
                </Link>
              </div>
            </Col>
          </Row>

          <Row
            gutter={16}
            style={{
              padding: '40px 0',
            }}
          >
            <Col span={16}>
              <div className="walk-box">
                <div className="action-title">
                  <FaCube size={36} color="#252739" />
                  <h1>The platform</h1>
                </div>

                <article>
                  <iframe
                    width="585"
                    height="330"
                    src="https://www.youtube.com/embed/AwklziE5HKo"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    style={{
                      width: '585',
                      height: '330',
                      margin: '20px 0 0',
                    }}
                  />
                </article>
              </div>
            </Col>
            <Col span={8}>
              <div className="walk-box">
                <div className="action-title">
                  <FaUserSecret size={36} color="#252739" />
                  <h1>User Details</h1>
                </div>
                <article>
                  <p>
                    <span>Name:</span> Richard Rosales
                  </p>
                  <p>
                    <span>Email:</span> theenumber3@gmail.com
                  </p>
                  <p>
                    <span>Account IP Address:</span> 192.92.132.12
                  </p>
                </article>
              </div>
              <div className="walk-box">
                <div className="action-title">
                  <GoInfo size={36} color="#252739" />
                  <h1>Need Help?</h1>
                </div>
                <div>
                  <Link className="help-links" to="help">
                    <Button type="primary" ghost="true" size="large" style={{ minWidth: 150 }}>
                      FAQ
                    </Button>
                  </Link>
                  <div className="line-cut">
                    <span className="text-cut">or</span>
                  </div>
                  <Link className="help-links" to="settings">
                    <Button type="primary" ghost="true" size="large" style={{ minWidth: 150 }}>
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.user.name,
  accountSelected: state.user.accountSelected,
  linkedAccounts: state.user.linkedAccounts,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: page => push(page),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
