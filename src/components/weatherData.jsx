import React, { Component } from "react";
import WeatherDataService from "../services/weatherDataService";

class WeatherData extends Component {
  state = {
    weatherDataItems: [],
  };

  componentDidMount() {
    WeatherDataService.retrieveAllData().then((response) => {
      response.status === 204
        ? this.setState({ weatherDataItems: [] })
        : this.setState({ weatherDataItems: response.data });
    });
  }

  render() {
    console.log(this.state.weatherDataItems);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Month</th>
            <th>Indicator</th>
            <th>Rain</th>
            <th>GDF</th>
            <th>RD</th>
            <th>WD</th>
          </tr>
        </thead>
        <tbody>
          {this.state.weatherDataItems.map((weatherDataItem) => (
            <tr key={weatherDataItem.id}>
              <td>{weatherDataItem.year}</td>
              <td>{weatherDataItem.month}</td>
              <td>{weatherDataItem.indicator}</td>
              <td>{weatherDataItem.rain}</td>
              <td>{weatherDataItem.gdf}</td>
              <td>{weatherDataItem.rd}</td>
              <td>{weatherDataItem.wd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default WeatherData;
