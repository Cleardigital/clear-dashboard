import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Row, Col, Card, Tabs } from 'antd';
import Dash from 'react-icons/lib/ti/chart-pie-outline';
import VertBar from '../../../components/ui/graphs/vertBar';
import AreaLine from '../../../components/ui/graphs/areaLine';
import HalfPie from '../../../components/ui/graphs/halfPie';

import { getAccountData } from '../../../helpers/user';
import './dashboard.css';

const TabPane = Tabs.TabPane;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cross: [null, null],
    };
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  primeClick = e => {
    // console.log(this.props.accountSelected.uid, this.props.linkedAccounts);
    this.getLinkData(this.props.accountSelected.uid);
  };

  getLinkData = accountId => {
    getAccountData(accountId, 'Spotify')
      .then(doc => {
        let data = [];
        doc.forEach(res => {
          data.push(res.data());
        });
        return data;
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log('Error getting documents: ', error);
      });
  };

  render() {
    const data = [
      {
        x: 'January',
        y: 39000,
      },
      {
        x: 'Feb',
        y: 56340,
      },
      {
        x: 'March',
        y: 45320,
      },
      {
        x: 'April',
        y: 20350,
      },
    ];
    return (
      <div className="dash-container">
        <div className="action-bar">
          <div className="action-title">
            <Dash size={34} color="#252739" />
            <h1>Dashboard</h1>
            <h2>Welcome back, {this.props.name}</h2>
          </div>
          <div className="action-buttons">
            <Button type="primary" ghost="true" size="large" onClick={this.primeClick}>
              Secondary
            </Button>
            <Button type="primary" size="large" onClick={this.primeClick}>
              Primary
            </Button>
          </div>
        </div>
        <Row gutter={16} style={{ margin: '0px -8px 20px' }}>
          <Col span={16}>
            <Card
              title="Overview"
              bodyStyle={{ padding: 0, minHeight: 300 }}
              loading={this.props.accountSelected === null ? true : false}
            >
              <AreaLine data={data} handleHover={this.handleHover} />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Account Details"
              bodyStyle={{ padding: 20, minHeight: 300 }}
              loading={this.props.accountSelected === null ? true : false}
            >
              <p>
                <span>Name:</span> Richard Rosales
              </p>
              <p>
                <span>Email:</span> theenumber3@gmail.com
              </p>
              <p>
                <span>Account IP Address:</span> 192.92.132.12
              </p>
              <Button type="primary">Need Help?</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ margin: '0px -8px 20px' }}>
          <Col span={24}>
            <Card
              // title="Account Data"
              bodyStyle={{
                padding: 0,
                minHeight: 150,
                display: 'flex',
                flexFlow: 'row',
                alignItems: 'stretch',
              }}
              loading={this.props.accountSelected === null ? true : false}
            >
              <div className="dash-non">
                <h3>Times Played</h3>
                <span>$194,254</span>
              </div>
              <div className="dash-non">
                <h3>Total Revenue</h3>
                <span>$47,266</span>
              </div>
              <div className="dash-non">
                <h3>Gross Income</h3>
                <span>$19,205</span>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ margin: '0px -8px 20px' }}>
          <Col span={8}>
            <Card
              title="Providor Split"
              bodyStyle={{ padding: 0, minHeight: 300 }}
              loading={this.props.accountSelected === null ? true : false}
            >
              <HalfPie data={data} handleHover={this.handleHover} />
            </Card>
          </Col>
          <Col span={16}>
            <Card
              bodyStyle={{ padding: 0, minHeight: 300 }}
              loading={this.props.accountSelected === null ? true : false}
            >
              <Tabs>
                <TabPane tab="Tab 1" key="1">
                  <VertBar cross={this.state.cross} data={data} handleHover={this.handleHover} />
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                  <VertBar cross={this.state.cross} data={data} handleHover={this.handleHover} />
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                  <VertBar cross={this.state.cross} data={data} handleHover={this.handleHover} />
                </TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

  handleClick = (data, event) => {
    console.log(data, event);
    this.setState({
      cross: [data.x, data.y],
    });
  };
  handleHover = event => {
    console.log(event);
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
