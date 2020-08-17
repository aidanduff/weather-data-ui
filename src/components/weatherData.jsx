import React, { Component } from "react";
import WeatherDataService from "../services/weatherDataService";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import WeatherDataTable from "./weatherDataTable";
import ChartPanel from "./chartPanel";
import Message from "./message";

class WeatherData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherDataItems: [],
      currentPage: 1,
      pageSize: 12,
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

  handlePageSizeChange = () => {};

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render(props) {
    const { currentPage, pageSize, showMessage, uploadMessage } = this.state;

    if (this.state.weatherDataItems.length === 0) return null;

    //sandbox
    const firstYear = this.state.weatherDataItems[0].year;
    const lastYear = this.state.weatherDataItems[
      this.state.weatherDataItems.length - 1
    ].year;
    const uniqueYears = lastYear - firstYear;
    let chunks = [];

    let year = firstYear;

    for (let i = 0; i <= uniqueYears; i++) {
      let chunk = this.state.weatherDataItems.filter(
        (wdi) => wdi.year === year
      );
      chunks.push(chunk);
      year++;
    }

    console.log(chunks);

    console.log(firstYear, lastYear, uniqueYears);

    const currentChunk = chunks[currentPage + 1];

    //sandbox

    // const weatherDataItems = paginate(
    //   this.state.weatherDataItems,
    //   currentPage,
    //   pageSize
    // );

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
              pagesCount={uniqueYears - 1}
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
