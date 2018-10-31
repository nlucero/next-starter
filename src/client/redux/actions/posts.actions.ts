import { postsConstants } from '../constants'

const getPost = id => dispatch =>
  dispatch({ type: postsConstants.GET_POST, body: { id } })

export default { getPost }
