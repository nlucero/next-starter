import React, { Component } from 'react'
import './posts.scss'

interface IProps {
  postId: number
}

export default class extends Component<IProps> {
  static getInitialProps({ query: { id } }) {
    return { postId: id }
  }

  render() {
    return (
      <div>
        <h1>My blog post #{this.props.postId}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    )
  }
}
