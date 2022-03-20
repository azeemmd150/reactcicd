import * as React from 'react';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  AreaSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { scalePoint } from 'd3-scale';

const data = [
  { month: 'November', onBoards: 10 },
  { month: 'December', onBoards: 20 },
  { month: 'January', onBoards: 85 },
  { month: 'February', onBoards: 100 },
];

const ChartRoot = props => (
  <Chart.Root {...props} className="pr-3" />
);
const LegendRoot = props => (
  <Legend.Root {...props} className="m-auto flex-row" />
);
const LegendItem = props => (
  <Legend.Item {...props} className="flex-column" />
);
const LegendLabel = props => (
  <Legend.Label {...props} className="pt-2" />
);

export default class ChartOne extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    return (
      <div className="card">
        <Chart height={300} width={1180}
          data={chartData}
          rootComponent={ChartRoot}
         
        >
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />

          <AreaSeries
            name="Onboards"
            valueField="onBoards"
            argumentField="month" 
            color="#fc4a1a"
          />
                   
          <Animation />
          <Legend
            position="bottom"
            rootComponent={LegendRoot}
            itemComponent={LegendItem}
            labelComponent={LegendLabel}
          />
          <Title
            text="Analysis of Onboarding"
          />
        </Chart>
      </div>
    );
  }
}