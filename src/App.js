import React from "react";
import "./App.css";
import WeatherData from "./components/weatherData";
import FileUpload from "./components/fileUpload";
import Nav from "./components/nav";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
