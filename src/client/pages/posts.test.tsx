import React from 'react'
import { shallow } from 'enzyme'
import Posts from './posts'

test('should render', () => {
  const wrapper = shallow(<Posts postId={123} />)
  expect(wrapper.length).toBe(1)
})
