import React from "react";
import WeatherDataService from "../services/weatherDataService";

const Settings = () => {
  const handleClick = () => {
    return WeatherDataService.deleteAllData();
  };

  return (
    <React.Fragment>
      <h1 className="pt-4">Delete</h1>
      <button
        className="btn btn-primary btn-block"
        onClick={handleClick}
        type="submit"
      >
        Delete
      </button>
    </React.Fragment>
  );
};

export default Settings;
