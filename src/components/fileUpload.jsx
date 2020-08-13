import React, { Component } from "react";
import FlashMessage from "react-flash-message";
import { post } from "axios";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      buttonStatus: false,
      showMessage: false,
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file).then((response) => {
      this.props.history.push("/home");
      console.log(response.data);
    });
  };

  getButtonStatus = () => {
    return this.state.buttonStatus
      ? "btn btn-primary btn-block mt-4"
      : "btn btn-primary btn-block mt-4 disabled";
  };

  onChange = (e) => {
    const str = e.target.files[0].name;
    if (str.endsWith(".csv")) {
      this.setState({ file: e.target.files[0], buttonStatus: true });
    } else {
      this.setState({ showMessage: true });
    }

    console.log(e.target.files[0]);
  };
  fileUpload = (file) => {
    const url = "http://localhost:8080/upload";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config);
  };

  render() {
    return (
      <div className="contentContainer">
        {this.state.showMessage && (
          <div>
            <FlashMessage duration={3000}>
              <div className="alert alert-danger">
                <p>Selected file must be in .csv format!</p>
              </div>
            </FlashMessage>
          </div>
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
