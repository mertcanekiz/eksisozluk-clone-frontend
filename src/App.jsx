import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink as RRNavLink,
  withRouter
} from "react-router-dom";

import {
  Col,
  Row,
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import LeftFrame from "./components/LeftFrame";
import Home from "./components/Home";
import Thread from "./components/Thread";

import "bootswatch/dist/cosmo/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <Router>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand tag={Link} to="/">
              eksisozluk
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    tag={RRNavLink}
                    exact
                    to="/thread/1"
                    activeClassName="active"
                  >
                    First thread
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} exact to="/thread/3">
                    French press
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <Container fluid>
          <Row>
            <Col sm="3" lg="2">
              <Route path="/thread/:id">
                <LeftFrame />
              </Route>
              <Route exact path="/">
                <LeftFrame />
              </Route>
            </Col>
            <Col sm="9" lg="10">
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/thread/:id"
                render={() => <Thread key={this.props.location.key} />}
              />
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default withRouter(App);
