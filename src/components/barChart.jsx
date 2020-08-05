import React, { Component } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";

class BarChart extends Component {
  getChartData(weatherDataItems) {
    const chartData = {
      labels: this.props.weatherDataItems.map((wdi) => wdi.month), //months
      datasets: [
        {
          label: `Rainy days per month in ${this.props.weatherDataItems[0].year}`,
          data: this.props.weatherDataItems.map((wdi) => wdi.rd),
          backgroundColor: "#343a40",
        },
      ],
    };
    return chartData;
  }

  render(props) {
    const allData = this.props.weatherDataItems;
    const chartData = this.getChartData(allData);

    console.log("render");
    return (
      <div key={this.props.weatherDataItems[0].year} className="chart col">
        <div className="row">
          <Bar
            data={chartData}
            width={50}
            height={230}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div className="row">
          <Pie
            data={chartData}
            width={50}
            height={230}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div className="row">
          <Line
            data={chartData}
            width={50}
            height={230}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    );
  }
}

export default BarChart;
