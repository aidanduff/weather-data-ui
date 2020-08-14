import React from "react";
import "./App.css";
import WeatherData from "./components/weatherData";
import FileUpload from "./components/fileUpload";
import TopNav from "./components/topNav";
import { Route, Redirect, Switch } from "react-router-dom";
import BottomNav from "./components/bottomNav";

function App() {
  return (
    <React.Fragment>
      <TopNav />
      <main role="main" className="container">
        <Switch>
          <Route path="/home" component={WeatherData}></Route>
          <Route path="/upload" component={FileUpload}></Route>
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
      <BottomNav />
    </React.Fragment>
  );
}

export default App;
