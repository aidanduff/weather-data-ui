import React, { Component } from "react";
import Message from "./message";
import weatherDataService from "../services/weatherDataService";

class FileUpload extends Component {
  state = {
    file: null,
    buttonStatus: false,
    showMessage: false,
  };

  onFormSubmit = (e) => {
    e.preventDefault(); // Stop form submit
    weatherDataService.addRecord(this.state.file).then((response) => {
      this.props.history.push({
        pathname: "/home",
        state: {
          showMessage: true,
        },
      });
      console.log(response.data);
    });
  };

  getButtonStatus = () => {
    return this.state.buttonStatus
      ? "btn btn-primary btn-block mt-4"
      : "btn btn-primary btn-block mt-4 disabled";
  };

  onChange = (e) => {
    console.log(this.state.showMessage);
    const str = e.target.files[0].name;
    if (str.endsWith(".csv")) {
      this.setState({
        file: e.target.files[0],
        buttonStatus: true,
      });
    } else {
      this.setState(
        {
          showMessage: true,
        },
        () =>
          setTimeout(() => {
            console.log("in the timeout");
            this.setState({ showMessage: false });
          }, 3000)
      );
    }

    console.log(e.target.files[0]);
    console.log(this.state.showMessage);
  };

  render() {
    const { showMessage } = this.state;
    return (
      <div className="contentContainer">
        {showMessage && (
          <Message
            showMessage={showMessage}
            messageClass={"alert alert-danger"}
            duration={3000}
            message={"File must be in .csv format!"}
          />
        )}
        <form onSubmit={this.onFormSubmit}>
          <h1 className="mt-2">File Upload</h1>
          <div className="custom-file mt-4">
            <div className="input-group">
              <input
                type="file"
                accept="text/csv, .csv"
                className="custom-file-input"
                id="customFile"
                onChange={this.onChange}
              />
              <label className="custom-file-label" htmlFor="customFile">
                {this.state.file === null
                  ? "Choose File"
                  : this.state.file.name}
              </label>
            </div>
            <button className={this.getButtonStatus()} type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FileUpload;
