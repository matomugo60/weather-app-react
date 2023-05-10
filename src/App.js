import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
         Developed by{" "}
        <a href="https://github.com/matomugo60">
          Martin Mugo
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
