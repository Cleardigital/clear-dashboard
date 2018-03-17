import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // eslint-disable-line no-use-before-define
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';

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
                <article
                  style={{
                    // backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    background: '#5A79EE',
                  }}
                >
                  <TiChartPieOutline size={34} color="#2E3339" />
                  <h1>Dashboard</h1>
                  <p>Et repellendus quia at iure aspernatur magni natus.</p>
                </article>
              </Link>
              <Link to="dashboard">
                <article
                  style={{
                    // backgroundImage: 'linear-gradient(to top, #4481eb 0%, #04befe 100%)',
                    background: '#6c9fee',
                  }}
                >
                  <GoOrganization size={34} color="#2E3339" />
                  <h1>Accounts</h1>
                  <p>Et repellendus quia at iure aspernatur magni natus.</p>
                </article>
              </Link>
              <Link to="settings">
                <article
                  style={{
                    // backgroundImage: 'linear-gradient(135deg, #76eea7, #4acf8c)',
                    background: '#ffcc3d',
                  }}
                >
                  <FaSliders size={34} color="#2E3339" />
                  <h1>Settings</h1>
                  <p>Et repellendus quia at iure aspernatur magni natus.</p>
                </article>
              </Link>
              <Link to="dashboard">
                <article
                  style={{
                    // backgroundImage: 'linear-gradient(to bottom, #ffe259, #ffa751)',
                    background: '#fb9267',
                  }}
                >
                  <GoInfo size={34} color="#2E3339" />
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
                placeholder="More Resources"
                style={{ width: 160 }}
                size="large"
                onChange={e => {
                  console.log('pizza');
                }}
              >
                <Option value="jack">Visit Help Center</Option>
                <Option value="lucy">Watch our Demos</Option>
              </Select>
            </div>
          </div>
          <Row
            gutter={16}
            type="flex"
            align="middle"
            style={{
              padding: '20px 0',
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
                  <article
                    style={{
                      borderLeft: '7px solid #42426d',
                    }}
                  >
                    <FaConnectdevelop size={34} color="#252739" />
                    <h1>Distribution</h1>
                    <p>Et repellendus quia at iure aspernatur magni natus.</p>
                  </article>
                </Link>
                <Link to="dashboard">
                  <article
                    style={{
                      borderLeft: '7px solid #6BC2B6',
                    }}
                  >
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
                  <YouTube
                    videoId="AwklziE5HKo"
                    className={'walk-video'}
                    opts={{
                      width: '585',
                      height: '330',
                      frameborder: '0',
                      allow: 'autoplay; encrypted-media',
                    }}
                    onReady={this._onReady}
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
                <div className="user-info">
                  <p>
                    <span>Name:</span> Richard Rosales
                  </p>
                  <p>
                    <span>Email:</span> theenumber3@gmail.com
                  </p>
                  <p>
                    <span>Account IP Address:</span> 192.92.132.12
                  </p>
                  {/* <p>
                    <span>Joined Cleardigital:</span> 04/12/15
                  </p> */}
                </div>
              </div>
              <div className="walk-box">
                <div className="action-title">
                  <GoInfo size={36} color="#252739" />
                  <h1>Need Help?</h1>
                </div>
                <div>
                  <Link className="help-links" to="help">
                    <Button type="primary" ghost="true" style={{ minWidth: 100 }}>
                      Faq
                    </Button>
                  </Link>
                  <div className="line-cut">
                    <span className="text-cut">or</span>
                  </div>
                  <Link className="help-links" to="settings">
                    <Button type="primary" ghost="true" style={{ minWidth: 100 }}>
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
