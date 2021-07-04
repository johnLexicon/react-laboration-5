import Axios from '../shared/axios';

//ACTION TYPES
const FETCH_USERS_REQUEST = 'fetchUsersRequest';
const FETCH_USERS_SUCCESS = 'fetchUsersSuccess';
const FETCH_USERS_FAILURE = 'fetchUsersFailure';
// const GET_USER = 'getUser';

//ACTION CREATORS
export const fetchUsers = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_USERS_REQUEST });
  try {
    const response = await Axios.get();
    dispatch({ type: FETCH_USERS_SUCCESS, payload: { users: response.data } });
  } catch (err) {
    dispatch({ type: FETCH_USERS_FAILURE, payload: { error: err.message } });
  }
};

// export const getUsers = () => {
//   return async (dispatch, getState) => {
//     const actionContent = {
//       type: GET_USERS,
//       payload: {},
//     };
//     try {
//       const response = await Axios.get();
//       actionContent.payload.users = response.data;
//     } catch (err) {
//       console.log(err);
//       actionContent.payload.users = [];
//     } finally {
//       dispatch(actionContent);
//     }
//   };
// };

const initState = {
  users: [],
  loading: false,
  error: null,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
