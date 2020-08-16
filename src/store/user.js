import { firebase } from '../firebase/config';

//ACTION TYPES
const SET_USER = 'SET_USER';

//ACTION CREATORS
const setUser = (user) => ({ type: SET_USER, user });

//THUNKS (call to firebase db here on user collection for specific doc)
export const loginUserThunk = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      const { uid } = response.user;
      const usersRef = await firebase.firestore().collection('users');
      const userDoc = await usersRef.doc(uid).get();

      if (!userDoc.exists) {
        alert('Unable to find account.');
        return;
      }

      const user = userDoc.data();
      dispatch(setUser(user));
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const signUpUserThunk = (email, password, fullName) => {
  return async (dispatch) => {
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const { uid } = response.user;

      //create user body
      const user = {
        id: uid,
        email,
        fullName,
      };

      const usersRef = await firebase.firestore().collection('users');
      await usersRef.doc(uid).set(user);
      dispatch(setUser(user));
    } catch (err) {
      console.error(err.message);
    }
  };
};

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
