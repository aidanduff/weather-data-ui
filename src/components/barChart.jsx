import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart extends Component {
  getChartData(weatherDataItems) {
    const chartData = {
      labels: this.props.weatherDataItems.map((wdi) => wdi.month),
      datasets: [
        {
          label: `Rainy days per month in ${this.props.weatherDataItems[0].year}`,
          data: this.props.weatherDataItems.map((wdi) => wdi.rd),
          backgroundColor: [
            "#379683",
            "#379683",
            "#7395AE",
            "#557A95",
            "#B1A296",
            "#5D5C61",
            "#379683",
            "#7395AE",
            "#557A95",
            "#B1A296",
            "#5D5C61",
            "#379683",
            "#7395AE",
            "#557A95",
            "#B1A296",
          ],
        },
      ],
    };
    return chartData;
  }

  render(props) {
    const chartData = this.getChartData(this.props.weatherDataItems);
    return (
      <Bar
        data={chartData}
        width={500}
        height={220}
        options={{ maintainAspectRatio: false }}
      />
    );
  }
}

export default BarChart;
