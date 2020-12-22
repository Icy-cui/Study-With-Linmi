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
                <NavDropdown.Item href="#action/3.1">Pop</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Rock
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Jazz
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Classical
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="mr-10">
              <NavDropdown title="Mood" id="Navbar-2nd-text">
                <NavDropdown.Item href="#action/3.1">Happy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Sad
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Mellow
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Smooth
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="mr-10">
              <NavDropdown title="Tag" id="Navbar-2nd-text">
                <NavDropdown.Item href="#action/3.1">Dance</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Synth
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Soul
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Gym
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
