import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PostsActions } from '../redux/actions'
import './posts.scss'

interface IProps {
  postId: number
  getPost: (id: number) => Promise<MyApp.Post>
  currentPost: MyApp.Post
}

class Posts extends Component<IProps> {
  static getInitialProps({ query: { id }, store }) {
    store.dispatch(PostsActions.getPost(Number(id)))
  }

  render() {
    const { currentPost } = this.props

    return currentPost ? (
      <div>
        <h1>My blog post #{currentPost.id}</h1>
        <p>{currentPost.text}</p>
      </div>
    ) : (
      <h1>Post not found</h1>
    )
  }
}

const mapStateToProps = state => ({
  currentPost: state.posts.currentPost,
})

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(PostsActions.getPost(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)

export { Posts as BaseComponent }
