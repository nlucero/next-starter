import { postsConstants } from '../constants'

const initialState = {
  posts: [
    {
      id: 1,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      text:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      text:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ],
}

const postsReducer = (state = initialState, action: { type; body: any }) => {
  switch (action.type) {
    case postsConstants.GET_POST:
      return {
        ...state,
        currentPost: state.posts.find(p => p.id === action.body.id),
      }
    default:
      return state
  }
}

export default postsReducer
