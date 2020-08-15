//ACTION TYPES
const SET_TASK = 'SET_TASK';

//ACTION CREATORS
const setTask = (task) => ({ type: SET_TASK, task });

//THUNKS (call to firebase db here on task collection for specific doc)

//INITIAL STATE
const initialState = {};

//REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TASK:
      return action.task;
    default:
      return state;
  }
}
