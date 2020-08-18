import React, { Component } from "react";
import WeatherDataService from "../services/weatherDataService";
import Pagination from "./pagination";
import WeatherDataTable from "./weatherDataTable";
import ChartPanel from "./chartPanel";
import Message from "./message";

class WeatherData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherDataItems: [],
      currentChunk: [],
      chunks: [],
      currentPage: 1,
      // pageSize: 12,
      showMessage: false,
      uploadMessage: "",
    };
  }

  componentWillMount() {
    if (
      this.props.location.state === null ||
      this.props.location.state === undefined
    )
      return;
    this.setState({
      showMessage: this.props.location.state.showMessage,
      uploadMessage: this.props.location.state.message,
    });
    // clear state.someValue from history
    this.props.history.replace({
      pathname: "/home",
      state: { showMessage: false },
    });
  }

  componentDidMount() {
    WeatherDataService.retrieveAllData().then((response) => {
      this.setState({
        weatherDataItems: response.data,
      });
    });
  }

  getPageData = () => {
    let firstYear = this.state.weatherDataItems[0].year;
    const lastYear = this.state.weatherDataItems[
      this.state.weatherDataItems.length - 1
    ].year;
    const uniqueYears = lastYear - firstYear;

    let chunks = [];

    while (firstYear <= lastYear) {
      chunks.push(
        this.state.weatherDataItems.filter((wdi) => wdi.year === firstYear)
      );
      firstYear++;
    }
    const currentChunk = chunks[this.state.currentPage];

    return { uniqueYears, currentChunk };
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render(props) {
    const { currentPage, showMessage, uploadMessage } = this.state;

    if (this.state.weatherDataItems.length === 0) return null;

    const { uniqueYears, currentChunk } = this.getPageData();

    return (
      <div className="contentContainer">
        {showMessage && (
          <Message
            messageClass={"alert alert-success"}
            duration={3000}
            message={uploadMessage}
          />
        )}
        <div className="row">
          <div className="col">
            <WeatherDataTable weatherDataItems={currentChunk} />
            <Pagination
              weatherDataItemsCount={this.state.weatherDataItems.length}
              currentPage={currentPage}
              pageSize={currentChunk.length}
              onPageChange={this.handlePageChange}
              pagesCount={uniqueYears}
            />
          </div>
          <div className="col">
            <ChartPanel weatherDataItems={currentChunk} />
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherData;
