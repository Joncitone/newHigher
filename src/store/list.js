//ACTION TYPES
const SET_LIST = 'SET_LIST';

//ACTION CREATORS
const setList = (list) => ({ type: SET_LIST, list });

//THUNKS (call to firebase db here on list collection for specific doc)

//INITIAL STATE
const initialState = {};

//REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LIST:
      return action.list;
    default:
      return state;
  }
}
