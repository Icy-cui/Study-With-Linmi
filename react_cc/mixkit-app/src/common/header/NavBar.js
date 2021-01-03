import React, { Component } from "react";
import "./NavgBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl} from "react-bootstrap";
import { actionCreators } from "./store/index";
//redux
import { connect } from "react-redux";
// 动画效果库
import { CSSTransition } from "react-transition-group";

class NavgBar extends Component {
  render() {
    return (
      <div id="Navbar-1st">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">咕咕</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <CSSTransition
          in={this.props.focused}
              timeout={200}
              classNames="slide">
            <Form
              type="text"
              className={this.props.focused ? "focused" : ""}
              onFocus={this.props.handleInputFocus}
              onBlur={this.props.handleInputBlur}
            >
              <FormControl className={this.props.focused ? "focused" : ""} type="text" placeholder="Type..." /> 
            </Form>
          </CSSTransition>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-5">
              <Nav.Link href="#">Video</Nav.Link>
              <Nav.Link href="#">Music</Nav.Link>
              <Nav.Link href="#">Sound Effects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
// 组件和store做连接时，state 如何映射到 props
const mapStateToProps = (state) => {
  // state 是 store中的所有数据，这样就可以在当前代码中使用 this.props.
  return {
    focused: state.header.focused
  };
};

// 组件要改变store中的内容要调用 dispatch 方法
const mapDispatchToProps = (dispatch) => {
  // dispatch 就是 store 的 dispatch 方法：传递action到store中去
  return {
    handleInputFocus() {
      const action = actionCreators.searchFocus();
      dispatch(action);
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavgBar);

