import React, { Component } from "react";
import WeatherDataService from "../services/weatherDataService";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import WeatherDataTable from "./weatherDatatable";
import ChartPanel from "./chartPanel";

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
    console.log("currentPage" + page);
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage, pageSize } = this.state;

    if (this.state.weatherDataItems.length === 0) return null;

    const weatherDataItems = paginate(
      this.state.weatherDataItems,
      currentPage,
      pageSize
    );

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <WeatherDataTable weatherDataItems={weatherDataItems} />
            <Pagination
              weatherDataItemsCount={this.state.weatherDataItems.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
          </div>
          <div className="col">
            <ChartPanel weatherDataItems={weatherDataItems} />
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherData;
