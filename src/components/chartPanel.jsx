import React, { Component } from "react";

class GraphPanel extends Component {
  state = {};
  render() {
    return (
      <div key={this.props.weatherDataItems[0].year} className="chart col">
        <div className="row">
          <BarChart />
        </div>
        <div className="row">
          <PieChart />
        </div>
        <div className="row">
          <Line
            data={chartData}
            width={50}
            height={225}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    );
  }
}

export default GraphPanel;
