import React, { Component } from "react";
import WeatherDataService from "../services/weatherDataService";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

class WeatherData extends Component {
  state = {
    weatherDataItems: [],
    currentPage: 1,
    pageSize: 12,
  };

  componentDidMount() {
    WeatherDataService.retrieveAllData().then((response) => {
      this.setState({ weatherDataItems: response.data });
    });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage, pageSize } = this.state;
    console.log(this.state.weatherDataItems.length);

    if (this.state.weatherDataItems.length === 0) return null;

    const weatherDataItems = paginate(
      this.state.weatherDataItems,
      currentPage,
      pageSize
    );

    return (
      <React.Fragment>
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Year</th>
              <th>Month</th>
              <th>Indicator</th>
              <th>Rainy Days</th>
              <th>Greatest Daily Rainfall</th>
              <th>Rainy Days</th>
              <th>Wet Days</th>
            </tr>
          </thead>
          <tbody>
            {weatherDataItems.map((weatherDataItem) => (
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
        <Pagination
          weatherDataItemsCount={this.state.weatherDataItems.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default WeatherData;
