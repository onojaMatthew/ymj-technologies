import React, { Component } from "react";
// import { connect } from "react-redux";
import { Row, Col, Button, Card, Input } from "reactstrap";
import Header from "../Pages/Header/Header";
import home from "../../assets/img/prod/headset.jpeg";

class Cart extends Component{
  render() {
    return (
      <div>
        <Header />
        <Row className="justify-content-center mt-5">
          <Col xs="12" xl="8">
            <h2>Cart (0 Item)</h2>
          </Col>
        </Row>
       
        <Row className="justify-content-center">
          <Col xl="8">
            <Row>
              <Col xs="12" xl="6">
                <p className="lead">ITEM</p>
              </Col>
              <Col xs="12" xl="2">
                <p className="lead">QUANTITY</p>
              </Col>
              <Col xs="12" xl="2">
                <p className="lead">UNIT PRICE</p>
              </Col>
              <Col xs="12" xl="2">
                <p className="lead">SUBTOTAL</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="12" xl="8">
            <Card>
              <Row>
                <Col xs="12" xl="6">
                  <Row>
                    <Col xs="12" xl="2">
                      <img
                        src={home}
                        alt=""
                        style={{ width: "100%", }}
                      />
                    </Col>
                    <Col xs="12" xl="10">
                      <p>Seller: Igoche</p>
                      <p>Seller: Igoche Seller: Igoche Seller: Igoche Seller: Igoche</p>
                      <p>Size[NG]: 40</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs="12" xl="2" style={{
                  borderLeft: "1px solid #f3f3f3",
                  paddingTop: 30
                }}>
                  <Input style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none"
                  }} type="select" value={0} name="select" />
                </Col>
                <Col xs="12" xl="2" style={{
                  borderLeft: "1px solid #f3f3f3",
                  paddingTop: 30
                }}>
                  <p>&#8358; 6000.00</p>
                </Col>
                <Col xs="12" xl="2" style={{
                  borderLeft: "1px solid #f3f3f3",
                  paddingTop: 30
                }}>
                  <p>&#8358; 6000.00</p>
                </Col>
              </Row>
            </Card>
            <Row>
              <Col xs="12" xl="9"></Col>
              <Col xs="12" xl="3">
                <p>Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#8358; 6000.00</p>
                <p>Shipping fees not included yet</p>
                <p>Customs Fee not included yet</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          
          <Col xs="12" xl="12">
            <Card>
              <Row style={{ padding: 10 }}>
                <Col xs="6" xl="6"></Col>
                <Col xs="6" xl="2"><Button style={{ background: "#f0a10f"}}>CONTINUE SHOPPING</Button></Col>
                <Col xs="6" xl="3"><Button style={{ background: "#f0a10f" }}>PROCEED TO CHECKOUT</Button></Col>
              </Row>
            </Card>
          </Col>
        
        </Row>
      </div>
    )
  }
}

export default Cart;