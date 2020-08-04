import axios from "axios";

class WeatherDataService {
  retrieveAllData() {
    return axios.get(`http://localhost:8080/weather`);
  }
}

export default new WeatherDataService();
