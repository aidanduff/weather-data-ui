import React, { Component } from "react";

class WeatherDataTable extends Component {
  render(props) {
    const { weatherDataItems } = this.props;
    return (
      <React.Fragment>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              {/* <th>Year</th> */}
              <th>Month</th>
              {/* <th>Indicator</th> */}
              <th>Precipitation (mm)</th>
              <th>Greatest Daily Rainfall (mm)</th>
              <th>Rainy Days</th>
              {/* <th>Wet Days</th> */}
            </tr>
          </thead>
          <tbody>
            {weatherDataItems.map((weatherDataItem) => (
              <tr key={weatherDataItem.id}>
                {/* <td>{weatherDataItem.year}</td> */}
                <td>{weatherDataItem.month}</td>
                {/* <td>{weatherDataItem.indicator}</td> */}
                <td>{weatherDataItem.rain}</td>
                <td>{weatherDataItem.gdf}</td>
                <td>{weatherDataItem.rd}</td>
                {/* <td>{weatherDataItem.wd}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default WeatherDataTable;
