import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import Content from "./Content";
import { Container } from "reactstrap";

class Home extends Component {

  async componentDidMount() {
    try {
      console.log("this is the ajax call")
    }
    catch(err){}
  }
  render() {
    const { match } = this.props;
    console.log(match)
    return (
      <div>
        <Header />
        <Container>
           <Content match={match} />
        </Container>
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);