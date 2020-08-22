import axios from "axios";

class WeatherDataService {
  retrieveAllData() {
    return axios.get(`http://localhost:8000/weather`);
  }

  addRecord(file) {
    const url = "http://localhost:8000/upload";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(url, formData, config);
  }

  deleteAllData() {
    axios.delete(`http://localhost:8000/delete`);
  }
}

export default new WeatherDataService();
