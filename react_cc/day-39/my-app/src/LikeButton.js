import React, { Component } from 'react'
import { Button } from "antd";
// import ReactDOM from 'react-dom'
import './index.css'

class LikeButton extends Component {
  constructor (props) {
    super(props)
    this.state = { isLiked: false }
  }

  onClickButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render () {
    return (
      <Button onClick={this.onClickButton.bind(this)}>
        {this.state.isLiked ? 'cancel' : 'like'} 👍
      </Button>
    )
  }
}

export default LikeButton;