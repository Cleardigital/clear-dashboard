import React, { Component } from 'react';
import Dimensions from 'react-dimensions';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

class VertBar extends Component {
  render() {
    const data = [
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
      { quarter: 3, earnings: 14250 },
      { quarter: 4, earnings: 19000 },
    ];

    return (
      <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={50}
        height={300}
        width={this.props.containerWidth}
      >
        <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']} />
        <VictoryAxis dependentAxis tickFormat={x => `$${x / 1000}k`} />
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    );
  }
}

export default Dimensions()(VertBar);
