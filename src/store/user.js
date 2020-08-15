//ACTION TYPES
const SET_USER = 'SET_USER';

//ACTION CREATORS
const setUser = (user) => ({ type: SET_USER, user });

//THUNKS (call to firebase db here on user collection for specific doc)

//INITIAL STATE
const initialState = {};

//REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}
