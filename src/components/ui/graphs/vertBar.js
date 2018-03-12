import React, { Component } from 'react';
import Dimensions from 'react-dimensions';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLegend } from 'victory';
import theme from '../../../config/chartTheme';

class VertBar extends Component {
  render() {
    const data = [
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
      { quarter: 3, earnings: 14250 },
      { quarter: 4, earnings: 19000 },
    ];
    console.log(VictoryTheme);
    return (
      <VictoryChart
        // adding the material theme provided with Victory
        theme={theme}
        domainPadding={{ x: [50, 0], y: [0, 0] }}
        height={300}
        width={this.props.containerWidth}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
          style={{
            axis: { stroke: 'transparent' },
            axisLabel: { fontSize: 20, padding: 30 },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={x => `$${x / 1000}k`}
          style={{
            axis: { stroke: 'transparent' },
            grid: { stroke: '#F2F4FA' },
            ticks: { stroke: 'grey', size: 5 },
            tickLabels: { fontSize: 15, padding: 5 },
          }}
        />
        <VictoryBar cornerRadius={5} data={data} x="quarter" y="earnings" />
        {/* <VictoryLegend
          x={60}
          y={10}
          title="Legend"
          orientation="horizontal"
          // itemsPerRow={3}
          gutter={20}
          style={{ border: { stroke: 'black' } }}
          data={[{ name: 'One' }, { name: 'Two' }, { name: 'Three' }, { name: 'Four' }]}
        /> */}
      </VictoryChart>
    );
  }
}

export default Dimensions()(VertBar);
