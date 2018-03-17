import React, { Component } from 'react';
import Dimensions from 'react-dimensions';
import { VictoryArea, VictoryChart, VictoryAxis, VictoryLegend } from 'victory';
import theme from '../../../config/chartTheme';

class AreaLine extends Component {
  render() {
    const data = [
      { x: 'Jan', y: 2 },
      { x: 'Feb', y: 3 },
      { x: 'Mar', y: 5 },
      { x: 'Apr', y: 4 },
      { x: 'May', y: 6 },
      { x: 'Jun', y: 9 },
    ];
    return (
      <VictoryChart
        // adding the material theme provided with Victory
        theme={theme}
        domainPadding={{ x: [10, 0], y: [0, 0] }}
        height={300}
        width={this.props.containerWidth}
      >
        <VictoryAxis
          // tickValues={[1, 2, 3, 4]}
          // tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
          style={{
            axis: { stroke: 'transparent' },
            axisLabel: { fontSize: 20, padding: 30 },
          }}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat={x => `$${x / 1000}k`}
          style={{
            axis: { stroke: 'transparent' },
            grid: { stroke: '#F2F4FA' },
            ticks: { stroke: 'grey', size: 5 },
            tickLabels: { fontSize: 15, padding: 5 },
          }}
        />

        {/* <VictoryLine
          style={{
            data: {
              stroke: '#c43a31',
              strokeWidth: 3,
            },
            labels: {
              fontSize: 15,
              fill: d => (d.x === 3 ? '#000000' : '#c43a31'),
            },
          }}
          data={data}
          interpolation="natural"
        /> */}

        <VictoryArea
          style={{
            data: {
              fill: 'rgba(90, 121, 238, 0.2)',
              fillOpacity: 0.7,
              stroke: '#5A79EE',
              strokeWidth: 3,
            },
            labels: {
              fontSize: 15,
              fill: '#5A79EE',
              // fill: d => (d.y === 2 ? '#000000' : '#5A79EE'),
            },
          }}
          data={data}
          interpolation="natural"
          labels={d => d.y}
        />
      </VictoryChart>
    );
  }
}

export default Dimensions()(AreaLine);
