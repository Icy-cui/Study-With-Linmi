import React, { Component } from "react";
import './NavgBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";

export class NavgBar extends Component {
  render() {
    return (
      <div id= 'Navbar-1st'>
        <Navbar bg="light" expand="lg" >
          <Navbar.Brand href="#">咕咕</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form inline className="ml-2 mr-sm-2">
              <FormControl
                type="text"
                placeholder="Type..."
                className="ml-2 mr-sm-2"
              />
              <Button variant="outline-primary">Search</Button>{' '}
            </Form>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-5">
              <Nav.Link href="#">Video</Nav.Link>
              <Nav.Link href="#">Music</Nav.Link>
              <Nav.Link href="#">Sound Effects</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavgBar;
