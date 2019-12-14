import React, { Component } from "react";
import Header from "../Header/Header";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <h2>Hello from Home component</h2>
      </div>
    )
  }
}

export default Home;