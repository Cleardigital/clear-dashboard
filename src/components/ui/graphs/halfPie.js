import React, { Component } from 'react';
import Dimensions from 'react-dimensions';
import { VictoryPie, VictoryChart, VictoryAxis, VictoryLegend } from 'victory';
import theme from '../../../config/chartTheme';

class HalfPie extends Component {
  render() {
    const data = [{ x: 'Apple', y: 2 }, { x: 'Google', y: 3 }, { x: 'Spotify', y: 5 }, { x: 'Other', y: 4 }];
    return (
      <VictoryPie
        height={300}
        width={this.props.containerWidth}
        theme={theme}
        startAngle={180}
        endAngle={-180}
        data={data}
      />
    );
  }
}

export default Dimensions()(HalfPie);
