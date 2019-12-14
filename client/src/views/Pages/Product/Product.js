import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, Col, Row, Container } from "reactstrap";

class Product extends Component{
  render() {
    return (
      <div>
        <Container>
          <Card>
            <CardBody>
              <Row>
                <Col xs="12" xl="7">
                  
                </Col>
                <Col xs="12" xl="5"></Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
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