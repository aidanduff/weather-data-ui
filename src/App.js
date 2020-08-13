import React from "react";
import "./App.css";
import WeatherData from "./components/weatherData";
import FileUpload from "./components/fileUpload";
import Nav from "./components/nav";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <main role="main" className="container">
        <Nav />
        <Switch>
          <Route path="/home" component={WeatherData}></Route>
          <Route path="/upload" component={FileUpload}></Route>
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
        {/* <WeatherData /> */}
      </main>
      <nav class="navbar fixed-bottom navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          &copy; Aidan Duff 2020
        </a>
      </nav>
    </React.Fragment>
  );
}

export default App;
