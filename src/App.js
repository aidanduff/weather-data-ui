import React from "react";
import "./App.css";
import WeatherData from "./components/weatherData";
import FileUpload from "./components/fileUpload";
import Nav from "./components/nav";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <main role="main" className="container">
        <Switch>
          <Route path="/home" component={WeatherData}></Route>
          <Route path="/upload" component={FileUpload}></Route>
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
      <nav class="navbar fixed-bottom navbar-dark bg-dark justify-content-center">
        <p className="font-weight-regular text-white">
          &copy; Aidan Duff 2020 &nbsp;
          <a href="https://github.com/aidanduff/weather-data-ui">
            <i className="fa fa-github fa-2x"> </i>
          </a>
        </p>
      </nav>
    </React.Fragment>
  );
}

export default App;
