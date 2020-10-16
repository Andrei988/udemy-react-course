import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())
  // const userIds = _.uniq(_.map(getState().posts, 'userId')) // the method without chain statement, (alternative)
  // userIds.forEach(id => dispatch(fetchUser(id)))

  _.chain(getState().posts) // chains functions
      .map('userId') // returns only ids from posts objects, the getState().posts will be passed as an argument in the background so we need to provide only userId string(the actual object name that we need) 
      .uniq() // [1, 1, 2, 2] -> [1, 2]
      .forEach(id => dispatch(fetchUser(id))) // dispatch the fetchUser for each id 
      .value() // execute chain stuff
}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`)
  dispatch({ type: 'FETCH_USERS', payload: response.data });
}


// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`)
//   dispatch({ type: 'FETCH_USERS', payload: response.data });
// })
