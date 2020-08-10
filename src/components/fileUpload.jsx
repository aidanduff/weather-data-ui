import React, { Component } from "react";
import axios, { post } from "axios";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file).then((response) => {
      console.log(response.data);
    });
  };
  onChange = (e) => {
    this.setState({ file: e.target.files[0] });
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
      <form onSubmit={this.onFormSubmit} className="m-4">
        <h1>File Upload</h1>
        <div className="custom-file">
          <div className="input-group">
            <input type="file" className="mb-2" onChange={this.onChange} />
          </div>
          <button className="btn btn-primary" type="submit">
            Upload
          </button>
        </div>
      </form>
    );
  }
}

export default FileUpload;
