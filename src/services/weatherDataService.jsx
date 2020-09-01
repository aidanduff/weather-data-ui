import axios from "axios";

class WeatherDataService {
  retrieveAllData() {
    // return axios.get(`http://localhost:8080/weather`);
    return axios.get("https://rainydays-server.herokuapp.com/weather");
  }

  addRecord(file) {
    // const url = "http://localhost:8080/upload";
    const url = "https://rainydays-server.herokuapp.com/upload";
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
    // axios.delete(`http://localhost:8080/delete`);
    axios.delete(`https://rainydays-server.herokuapp.com/delete`);
  }
}

export default new WeatherDataService();
