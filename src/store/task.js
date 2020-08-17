import { firebase } from '../firebase/config';
const db = firebase.firestore();

//ACTION TYPES
const SET_ALL_TASKS = 'SET_ALL_TASKS';
const SET_SINGLE_TASK = 'SET_SINGLE_TASK';
const ADD_TASK = 'ADD_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const REMOVE_TASK = 'REMOVE_TASK';

//ACTION CREATORS
const setAllTasks = (tasks) => ({ type: SET_ALL_TASKS, tasks });
const setSingleTask = (task) => ({ type: SET_SINGLE_TASK, task });
const addTask = (task) => ({ type: ADD_TASK, task });
const updateTask = (task) => ({ type: UPDATE_TASK, task });
const removeTask = (taskId) => ({ type: REMOVE_TASK, taskId });

//THUNKS (call to firebase db here on task collection for specific doc)
export const setAllTasksThunk = (listName) => {
  return async (dispatch) => {
    try {
      const { currentUser } = await firebase.auth();
      const { uid } = currentUser;

      const tasksRef = db
        .collection('users')
        .doc(uid)
        .collection('lists')
        .doc(listName)
        .collection('tasks');

      const querySnapshot = await tasksRef.get();

      const allTasks = [];

      querySnapshot.forEach((doc) => {
        const task = doc.data();
        allTasks.push(task);
      });

      dispatch(setAllTasks(allTasks));
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const setSingleTaskThunk = (listName, taskName) => {
  return async (dispatch) => {
    try {
      //firebase query and dispatch action here
      const { currentUser } = await firebase.auth();
      const { uid } = currentUser;

      const tasksRef = await db
        .collection('users')
        .doc(uid)
        .collection('lists')
        .doc(listName)
        .collection('tasks');

      const taskDoc = await tasksRef.where('taskName', '==', taskName).get();

      let singleTask;

      taskDoc.forEach((doc) => {
        singleTask = doc.data();
      });

      console.log('task', singleTask);
      dispatch(setSingleTask(singleTask));
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const addTaskThunk = () => {
  return async (dispatch) => {
    try {
      //firebase query and dispatch action here
      const { currentUser } = await firebase.auth();
      const { uid } = currentUser;
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const updateTaskThunk = () => {
  return async (dispatch) => {
    try {
      //firebase query and dispatch action here
      const { currentUser } = await firebase.auth();
      const { uid } = currentUser;
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const removeTaskThunk = () => {
  return async (dispatch) => {
    try {
      //firebase query and dispatch action here
      const { currentUser } = await firebase.auth();
      const { uid } = currentUser;
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
    case SET_ALL_TASKS:
      return { ...state, all: action.tasks };
    case SET_SINGLE_TASK:
      return { ...state, single: action.task };
    case ADD_TASK:
      return { ...state, all: [...state.all, action.task] };
    case UPDATE_TASK:
      return {
        ...state,
        single: action.task,
        all: state.all.map((task) => {
          if (task.id === action.task.id) task = action.task;
          return task;
        }),
      };
    case REMOVE_TASK:
      return {
        ...state,
        all: state.all.filter((task) => task.id !== action.taskId),
      };
    default:
      return state;
  }
}
