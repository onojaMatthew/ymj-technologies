import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  Button,
  Form,
  Input,
  DropdownMenu,
  DropdownItem,
  Container,
  // NavbarText
} from 'reactstrap';

import logo from "../../../assets/img/brand/ymj.jpeg";

const Header = ( props ) => {
  const [ isOpen, setIsOpen ] = useState( false );

  const toggle = () => setIsOpen( !isOpen );

  const styles = {
    nav: {
      color: "#fff"
    },
    about: {
      color: "#333"
    }
  }
  
  return (
    <div className="custom-header">
      <Navbar className="light"  expand="md">
        <Container>
        <NavbarBrand href="/">
            <img src={logo} alt="" style={{ height: 40, }} />
            <span
              style={{
                color: "#fff",
                marginLeft: 15,
                fontSize: "26px"
              }}>YMJTechnologies</span>
        </NavbarBrand>
        <Col xs="12" xl="6">
          <Form class="form-inline">
            <Row className="justify-content-center">
              <Col xs="10" xl="10">
                <Input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              </Col>
              <Col xs="2" xl="2">
                <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
              </Col>
           
            </Row>
          </Form>
        </Col>
        <NavbarToggler onClick={toggle} className="menu" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  href="https://ojirehprime.com"
                  style={styles.nav}
                >Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={styles.nav}>
                  Account
                </DropdownToggle>
                <DropdownMenu center>
                <DropdownItem>
                  <NavLink
                    href="/login"
                  >LOGIN</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    href="/register"
                  >CREATE AN ACCOUNT</NavLink>
                </DropdownItem>
                  <DropdownItem>
                    <i className="cil-cart"></i>
                </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header