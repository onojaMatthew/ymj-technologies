import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Card, Col, Row, Container } from "reactstrap";
import home from "../../../assets/img/prod/hometheatre.jpeg"
import Header from "../Header/Header";

class Product extends Component{
  render() {
    return (
      <div>
        <Header />
        <Container className="mt-3 single-prod">
          <Row>
            <Col xs="12" xl="9">
              <Card>
                <Row className="mt-3">
                  <Col xs="12" xl="4">
                    <img src={home} alt="product" />
                  </Col>
                  <Col xs="12" xl="8">
                    <h4>Hampers Christmas Hamper Exclusive Gift Combo - HPTSCH05</h4>
                    <p>Brand: <Link to="">Hamper</Link></p>
                    <hr />
                    <h3 style={{ fontWeight: "bold" }}>&#8358; 30000.00</h3>
                    <Button style={{
                      background: "linear-gradient( to right, #f0a10f 0%, #f0a10f 100%)",
                      padding: 10,
                      color: "#fff",
                      width: "95%",
                      marginRight: 10,
                      marginBottom: '15px',
                    }}> ADD TO CART</Button>
                    <hr />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs="12" xl="3">
              <Card>
                <Col xs="12" xl="12">
                  <p>DELIVERY AND RETURNS</p>
                  <hr />
                  <Row>
                    <Col xs="2" xl="2" style={{
                      borderRadius: "100%",
                      border: "solid 1px #f3f3f3"
                    }}>
                      <i className="cil-bus-alt"></i>
                    </Col>
                    <Col xs="10" xl="10">
                      just to deliver all product 
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="2" xl="10"></Col>
                  </Row>
                </Col>
              </Card>
            </Col>
          </Row>
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