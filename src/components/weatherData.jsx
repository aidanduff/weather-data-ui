import React, { Component } from "react";
import WeatherDataService from "../services/weatherDataService";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import WeatherDataTable from "./weatherDataTable";
import ChartPanel from "./chartPanel";
import Message from "./message";

class WeatherData extends Component {
  state = {
    weatherDataItems: [],
    currentPage: 1,
    pageSize: 12,
    showMessage: false,
  };

  componentDidMount() {
    WeatherDataService.retrieveAllData().then((response) => {
      this.setState({
        weatherDataItems: response.data,
        showMessage: this.props.location.state != null,
      });
    });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render(props) {
    const { currentPage, pageSize, showMessage } = this.state;

    if (this.state.weatherDataItems.length === 0) return null;

    const weatherDataItems = paginate(
      this.state.weatherDataItems,
      currentPage,
      pageSize
    );

    return (
      <div className="contentContainer">
        {showMessage && (
          <Message
            showMessage={showMessage}
            messageClass={"alert alert-success"}
            duration={3000}
            message={"File uploaded successfully!"}
          />
        )}
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
