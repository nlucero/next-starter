import React from 'react'
import { shallow } from 'enzyme'
import { BaseComponent as Posts } from './posts'

test('should render', () => {
  const post: MyApp.Post = { id: 1, text: 'text' }
  const getPost = () => Promise.resolve(post)
  const wrapper = shallow(
    <Posts postId={123} getPost={getPost} currentPost={post} />
  )
  expect(wrapper.length).toBe(1)
})
