import { firebase } from '../firebase/config';

//ACTION TYPES
const SET_ALL_LISTS = 'SET_ALL_LISTS';
const SET_SINGLE_LIST = 'SET_SINGLE_LIST';
const ADD_LIST = 'ADD_LIST';
const UPDATE_LIST = 'UPDATE_LIST';
const REMOVE_LIST = 'REMOVE_LIST';

//ACTION CREATORS
const setAllLists = (lists) => ({ type: SET_ALL_LISTS, lists });
const setSingleList = (list) => ({ type: SET_SINGLE_LIST, list });
const addList = (list) => ({ type: ADD_LIST, list });
const updateList = (list) => ({ type: UPDATE_LIST, list });
const removeList = (listId) => ({ type: REMOVE_LIST, listId });

//THUNKS (call to firebase db here on list collection for specific doc)
export const setAllListsThunk = () => {
  return async (dispatch) => {
    try {
      //insert firebase query here
      //call dispatch action with response data returned from query
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const setSingleListThunk = () => {
  return async (dispatch) => {
    try {
      //firebase query and dispatch action here
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const addListThunk = () => {
  return async (dispatch) => {
    try {
      //firebase query and dispatch action here
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const updateListThunk = () => {
  return async (dispatch) => {
    try {
      //firebase query and dispatch action here
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const removeListThunk = () => {
  return async (dispatch) => {
    try {
      //firebase query and dispatch action here
    } catch (err) {
      console.error(err.message);
    }
  };
};

//INITIAL STATE
const initialState = {
  all: [],
  single: {},
};

//REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ALL_LISTS:
      return { ...state, all: action.lists };
    case SET_SINGLE_LIST:
      return { ...state, single: action.list };
    case ADD_LIST:
      return { ...state, all: [...state.all, action.list] };
    case UPDATE_LIST:
      return {
        ...state,
        single: action.list,
        all: state.all.map((list) => {
          if (list.id === action.list.id) list = action.list;
          return list;
        }),
      };
    case REMOVE_LIST:
      return {
        ...state,
        all: state.all.filter((list) => list.id !== action.listId),
      };
    default:
      return state;
  }
}
