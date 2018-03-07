import React, { Component } from 'react';
import { Table } from 'antd';

class AccountTable extends Component {
  render() {
    const columns = [
      {
        title: 'Sales Period',
        dataIndex: 'SalesPeriod',
        key: 'SalesPeriod',
        fixed: 'left'
      },
      {
        title: 'Store Name',
        dataIndex: 'StoreName',
        key: 'StoreName'
      },
      {
        title: 'Country Of Sale',
        dataIndex: 'CountryOfSale',
        key: 'CountryOfSale',
        filters: [{ text: 'US', value: 'US' }, { text: 'Mexico', value: 'MX' }]
      },
      {
        title: 'Artist',
        dataIndex: 'Artist',
        key: 'Artist'
      },
      {
        title: 'Release Type',
        dataIndex: 'ReleaseType',
        key: 'ReleaseType'
      },
      {
        title: 'Release Title',
        dataIndex: 'ReleaseTitle',
        key: 'ReleaseTitle'
      },
      {
        title: 'Song Title',
        dataIndex: 'SongTitle',
        key: 'SongTitle'
      },
      {
        title: 'Sales Type',
        dataIndex: 'SalesType',
        key: 'SalesType'
      },
      {
        title: 'Units Sold',
        dataIndex: 'UnitsSold',
        key: 'UnitsSold'
      },
      {
        title: 'Exchange Rate',
        dataIndex: 'ExchangeRate',
        key: 'ExchangeRate'
      },
      {
        title: 'Total Earned',
        dataIndex: 'TotalEarned',
        key: 'TotalEarned'
      },
      {
        title: 'Currency',
        dataIndex: 'Currency',
        key: 'Currency'
      }
    ];

    return (
      <Table
        columns={columns}
        dataSource={this.props.data}
        loading={this.props.loading}
        locale={{
          filterTitle: 'Shit',
          filterConfirm: 'Ok',
          filterReset: 'Cancel',
          emptyText: 'Empty'
        }}
        scroll={{ x: 1300 }}
      />
    );
  }
}

export default AccountTable;
