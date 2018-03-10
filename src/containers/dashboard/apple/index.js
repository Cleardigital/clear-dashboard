import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Row, Col, Card, Table } from 'antd';
import { FaApple } from 'react-icons/lib/fa';

import VertBar from '../../../components/ui/graphs/vertBar';

class Apple extends Component {
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

  onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

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
    const tableData = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
    ];
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        filters: [
          {
            text: 'Joe',
            value: 'Joe',
          },
          {
            text: 'Jim',
            value: 'Jim',
          },
          {
            text: 'Submenu',
            value: 'Submenu',
            children: [
              {
                text: 'Green',
                value: 'Green',
              },
              {
                text: 'Black',
                value: 'Black',
              },
            ],
          },
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        filters: [
          {
            text: 'London',
            value: 'London',
          },
          {
            text: 'New York',
            value: 'New York',
          },
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.address.indexOf(value) === 0,
        sorter: (a, b) => a.address.length - b.address.length,
      },
    ];
    return (
      <div className="dash-container">
        <div className="action-bar">
          <div className="action-title">
            <FaApple size={34} color="#252739" />
            <h1>Apple</h1>
            <h2>Apple Music, iTunes etc.</h2>
          </div>
          <div className="action-buttons">
            <Button type="primary" size="large">
              Primary
            </Button>
            <Button type="primary" size="large">
              Primary
            </Button>
          </div>
        </div>
        <Row gutter={16} style={{ margin: '0px -8px 20px' }}>
          <Col span={8}>
            <Card
              title="Overall Data from Google"
              style={{
                width: '100%',
                height: '397px',
              }}
            >
              <h1>Rich</h1>
            </Card>
          </Col>
          <Col span={16}>
            <Card
              title="Overall Data from Google"
              style={{
                width: '100%',
              }}
            >
              <VertBar cross={this.state.cross} data={data} />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ margin: '0px -8px 20px' }}>
          <Col span={12}>
            <Card
              title="Apple Data"
              style={{
                width: '100%',
              }}
            >
              <h1>Bar</h1>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              title="Apple Data"
              style={{
                width: '100%',
              }}
            >
              <h1>Bar</h1>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ margin: '0px -8px 20px' }}>
          <Col span={24}>
            <Card
              title="Apple Data"
              style={{
                width: '100%',
              }}
            >
              <Table columns={columns} dataSource={tableData} onChange={this.onChange} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({ name: state.user.name });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: page => push(page),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Apple);
