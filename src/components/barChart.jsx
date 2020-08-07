import React, { Component } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import PieChart from "./pieChart";

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
    const allData = this.props.weatherDataItems;
    const chartData = this.getChartData(allData);

    console.log("render");
    return (
      <div key={this.props.weatherDataItems[0].year} className="chart col">
        <div className="row m-2">
          <div class="card">
            <h5 class="card-header">Rainy Days Per Month</h5>
            <div class="card-body">
              <p class="card-text">
                <Bar
                  data={chartData}
                  width={500}
                  height={220}
                  options={{ maintainAspectRatio: false }}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="row m-2">
          <div class="card">
            <h5 class="card-header">Precipitation Per Season</h5>
            <div class="card-body">
              <p class="card-text">
                <PieChart weatherDataItems={this.props.weatherDataItems} />
              </p>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <Line
            data={chartData}
            width={50}
            height={230}
            options={{ maintainAspectRatio: false }}
          />
        </div> */}
      </div>
    );
  }
}

export default BarChart;
