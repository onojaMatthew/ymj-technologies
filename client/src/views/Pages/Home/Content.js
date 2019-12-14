import React, { Component } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import phone from "../../../assets/img/prod/phone.jpeg";
import home from "../../../assets/img/prod/hometheatre.jpeg";
import homeItem from "../../../assets/img/prod/homeItem.jpeg";
import plazma from "../../../assets/img/prod/plazma.jpeg";
import headset from "../../../assets/img/prod/headset.jpeg";

class Content extends Component{
  handleNavigation = ( prodId ) => {
  // const { match } = this.props;
  window.location.href = `/products/${ prodId }`
}
  render() {
    return (
      <div>
        <div>
          <div className="label mt-3">
            Home electronic appliances
        </div>
          <Card>
            <CardBody>
              <Row>
                <Col xs="12" xl="2" className="product" onClick={() => this.handleNavigation("23465554")}>
                  <img src={phone} alt="phone" />
                  <div className="prod-footer">
                    <span>Powerful iPhone</span><br />
                    <span style={{ fontSize: 18 }}>&#8358; 2000.00</span>
                  </div>
                </Col>
                <Col xs="12" xl="2" className="product">
                  <img src={homeItem} alt="phone" />
                  <div className="prod-footer">
                    <span>Powerful iPhone</span><br />
                    <span style={{ fontSize: 18 }}>&#8358; 2000.00</span>
                  </div>
                </Col>
                <Col xs="12" xl="2" className="product">
                  <img src={home} alt="phone" />
                  <div className="prod-footer">
                    <span>Powerful iPhone</span><br />
                    <span style={{ fontSize: 18 }}>&#8358; 2000.00</span>
                  </div>
                </Col>
                <Col xs="12" xl="2" className="product">
                  <img src={headset} alt="phone" />
                  <div className="prod-footer">
                    <span>Powerful iPhone</span><br />
                    <span style={{ fontSize: 18 }}>&#8358; 2000.00</span>
                  </div>
                </Col>
                <Col xs="12" xl="2" className="product">
                  <img src={plazma} alt="phone" />
                  <div className="prod-footer">
                    <span>Powerful iPhone</span><br />
                    <span style={{ fontSize: 18 }}>&#8358; 2000.00</span>
                  </div>
                </Col>
                <Col xs="12" xl="2" className="product">
                  <img src={home} alt="phone" />
                  <div className="prod-footer">
                    <span>Powerful iPhone</span><br />
                    <span style={{ fontSize: 18 }}>&#8358; 2000.00</span>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
        <div>
          <div className="label mt-3">
            Home electronic appliances
        </div>
          <Card>
            <CardBody>
              <Row>
                <Col xs="12" xl="2" className="product">
                  <img src={phone} alt="phone" />
                  <div className="prod-footer">
                    <span>Powerful iPhone</span><br />
                    <span style={{ fontSize: 18 }}>&#8358; 2000.00</span>
                  </div>
                </Col>
                <Col xs="12" xl="2" className="product">
                  <img src={homeItem} alt="phone" />
                  <div className="prod-footer">
                    <span>Powerful iPhone</span><br />
                    <span style={{ fontSize: 18 }}>&#8358; 2000.00</span>
                  </div>
                </Col>
                <Col xs="12" xl="2" className="product">
                  <img src={home} alt="phone" />
                  <div className="prod-footer">
                    <span>Powerful iPhone</span><br />
                    <span style={{ fontSize: 18 }}>&#8358; 2000.00</span>
                  </div>
                </Col>
                <Col xs="12" xl="2" className="product">
                  <img src={headset} alt="phone" />
                  <div className="prod-footer">
                    <span>Powerful iPhone</span><br />
                    <span style={{ fontSize: 18 }}>&#8358; 2000.00</span>
                  </div>
                </Col>
                <Col xs="12" xl="2" className="product">
                  <img src={plazma} alt="phone" />
                  <div className="prod-footer">
                    <span>Powerful iPhone</span><br />
                    <span style={{ fontSize: 18 }}>&#8358; 2000.00</span>
                  </div>
                </Col>
                <Col xs="12" xl="2" className="product">
                  <img src={home} alt="phone" />
                  <div className="prod-footer">
                    <span>Powerful iPhone</span><br />
                    <span style={{ fontSize: 18 }}>&#8358; 2000.00</span>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
 
}

export default Content;