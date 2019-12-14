import React, { Component } from "react";
import { connect } from "react-redux";

class Product extends Component{
  render() {
    return (
      <div>
        <h2>Single Product Page</h2>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {

  }
}

const mapDispatchToProps = ( dispatch ) => {
  const dispatchProps = {

  }
  return dispatchProps;
}

export default connect( mapStateToProps, mapDispatchToProps )( Product );