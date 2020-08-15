import React from "react";

const About = () => {
  return (
    <div className="pt-4 text-center">
      <h1>About</h1>
      <br></br>
      <h5>
        This application is designed to store and display monthly weather data
        in the form of tables and graphs. The weather data to be used here can
        be obtained from gov.ie which has an extensive collection of datasets in
        .csv format. Below are some links to obtain examples these files, be
        sure to choose the monthly files. <br></br>
        <br></br>link <br></br>link <br></br>link<br></br>
        <br></br> The server side of this programme was created with the Spring
        Boot framework and the Java Persistance API, along with SQL. The client
        side uses React JS. Both backend and frontend respectively are available
        from the following github repositories. <br></br>
        <br></br>link <br></br>link<br></br>
        <br></br>For any queries or complaints regarding this application,
        please send a mail to aidanduff@gmail.com.
        <br></br>
        <br></br>
        <a
          href="https://github.com/aidanduff/weather-data-ui"
          className="text-right"
        >
          <i className="fa fa-github fa-github-about  fa-2x"> </i>
        </a>
        &nbsp;
        <a
          href="https://github.com/aidanduff/weather-data-ui"
          className="text-right"
        >
          <i className="fa fa-linkedin fa-linkedin-about fa-2x"> </i>
        </a>
      </h5>
    </div>
  );
};

export default About;
