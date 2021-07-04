import Axios from '../shared/axios';

//ACTION TYPES
const GET_USERS = 'getUsers';
// const GET_USER = 'getUser';

//ACTION CREATORS
export const getUsers = () => {
  return async (dispatch, getState) => {
    const actionContent = {
      type: GET_USERS,
      payload: {},
    };
    try {
      const response = await Axios.get();
      actionContent.payload.users = response.data;
    } catch (err) {
      console.log(err);
      actionContent.payload.users = [];
    } finally {
      dispatch(actionContent);
    }
  };
};

export default function reducer(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload.users };
    default:
      return state;
  }
}
