import React, { Component } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import { getSeasonalPrecipitation } from "../utils/seasonalPrecipitation";

class PieChart extends Component {
  render(props) {
    const chartData = {};
    chartData.labels = ["Winter", "Spring", "Summer", "Autumn"];
    chartData.datasets = [
      {
        label: `Rainy days per month in ${this.props.weatherDataItems[0].year}`,
        data: getSeasonalPrecipitation(this.props.weatherDataItems),
        backgroundColor: ["#379683", "#7395AE", "#557A95", "#B1A296"],
      },
    ];

    console.log("render");
    console.log(chartData);
    return (
      <div key={this.props.weatherDataItems[0].year} className="chart col">
        <div className="row">
          <Pie
            data={chartData}
            width={500}
            height={220}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    );
  }
}

export default PieChart;
