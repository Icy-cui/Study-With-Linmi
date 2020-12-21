import React, { Component } from "react";
import "./Selection.css";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export class Selection extends Component {
  render() {
    return (
      <div id='Navbar-2nd'>
        <Navbar bg="dark" variant="dark">
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-10">
              <NavDropdown title="Genre"  id="Navbar-2nd-text">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Genre
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Mood
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Tag
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="mr-10">
              <NavDropdown title="Mood" id="Navbar-2nd-text">
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
              </NavDropdown>
            </Nav>

            <Nav className="mr-10">
              <NavDropdown title="Tag" id="Navbar-2nd-text">
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
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Selection;
