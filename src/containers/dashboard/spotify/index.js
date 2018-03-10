import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Row, Col, Card, Table } from 'antd';
import { FaSpotify } from 'react-icons/lib/fa';
import { getAccountData } from '../../../helpers/user';
import moment from 'moment';

import VertBar from '../../../components/ui/graphs/vertBar';

class Spotify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cross: [null, null],
      tableData: [],
      barData: [],
    };
  }

  componentWillMount() {
    this.getLinkData(this.props.accountSelected.uid, 'Spotify');
  }

  getLinkData = (accountId, storeName) => {
    getAccountData(accountId, storeName)
      .then(doc => {
        let data = [];
        doc.forEach(res => {
          let obj = res.data();
          obj['key'] = res.id;

          data.push(obj);
        });
        return data;
      })
      .then(data => {
        // console.log(data);
        this.setState({
          tableData: data,
        });

        this.getData();
      })
      .catch(error => {
        console.log('Error getting documents: ', error);
      });
  };

  getData = () => {
    let arr = [];

    const data = this.state.tableData;

    data.map(doc => {
      arr.push({
        date: moment(doc.SalesPeriod, 'MM-DD-YYYY').format('MMMM, YYYY'),
        month: moment(doc.SalesPeriod, 'MM-DD-YYYY').format('MM'),
        year: moment(doc.SalesPeriod, 'MM-DD-YYYY').format('YYYY'),
        earned: parseFloat(doc.TotalEarned),
      });
      return null;
    });

    // var testData = [
    //   { country: 'Europe(ESA)', launches: 3 },
    //   { country: 'Russia', launches: 32 },
    //   { country: 'India', launches: 6 },
    //   { country: 'Russia', launches: 3 },
    //   { country: 'US', launches: 23 },
    //   { country: 'China', launches: 16 },
    //   { country: 'Europe(ESA)', launches: 7 },
    //   { country: 'India', launches: 4 },
    //   { country: 'US', launches: 7 },
    //   { country: 'Russia', launches: 5 },
    //   { country: 'China', launches: 14 },
    // ];

    var sum = arr.reduce((prevVal, elem, index) => {
      let copy = Object.assign([], prevVal);

      if (copy.length > 0) {
        for (let i = 0; i < copy.length; i++) {
          if (copy[i].date === elem.date) {
            copy[i].earned += elem.earned;
            return copy;
          }
        }
        copy.push(Object.assign({}, elem));
        return copy;
      } else {
        copy.push(Object.assign({}, elem));
        return copy;
      }
    }, []);

    const barData = sum.reduce((prevVal, elem) => {
      let copy = Object.assign([], prevVal);
      let newObj = {
        x: elem.date,
        y: elem.earned,
      };
      copy.push(Object.assign({}, newObj));
      return copy;
    }, []);

    console.log(barData);
    this.setState({
      barData,
    });
  };

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

  render() {
    // const data = [
    //   {
    //     x: 'January',
    //     y: 39000,
    //   },
    //   {
    //     x: 'Feb',
    //     y: 56340,
    //   },
    //   {
    //     x: 'March',
    //     y: 45320,
    //   },
    //   {
    //     x: 'April',
    //     y: 20350,
    //   },
    // ];
    // const tableData = [
    //   {
    //     key: '1',
    //     name: 'John Brown',
    //     age: 32,
    //     address: 'New York No. 1 Lake Park',
    //   },
    //   {
    //     key: '2',
    //     name: 'Jim Green',
    //     age: 42,
    //     address: 'London No. 1 Lake Park',
    //   },
    //   {
    //     key: '3',
    //     name: 'Joe Black',
    //     age: 32,
    //     address: 'Sidney No. 1 Lake Park',
    //   },
    //   {
    //     key: '4',
    //     name: 'Jim Red',
    //     age: 32,
    //     address: 'London No. 2 Lake Park',
    //   },
    // ];
    const columns = [
      {
        title: 'Artist',
        dataIndex: 'Artist',
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
        title: 'TotalEarned',
        dataIndex: 'TotalEarned',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'StoreName',
        dataIndex: 'StoreName',
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
            <FaSpotify size={34} color="#252739" />
            <h1>Spotify</h1>
            <h2>Music Streaming.</h2>
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
              <VertBar cross={this.state.cross} data={this.state.barData} handleHover={this.handleHover} />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ margin: '0px -8px 20px' }}>
          <Col span={12}>
            <Card
              title="Spotify Data"
              style={{
                width: '100%',
              }}
            >
              <h1>Bar</h1>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              title="Spotify Data"
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
              title="Spotify Data"
              style={{
                width: '100%',
              }}
            >
              <Table
                columns={columns}
                dataSource={this.state.tableData ? this.state.tableData : null}
                onChange={this.onChange}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

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

export default connect(mapStateToProps, mapDispatchToProps)(Spotify);
