import { firebase } from '../firebase/config';
const db = firebase.firestore();

//ACTION TYPES
const SET_USER = 'SET_USER';

//ACTION CREATORS
const setUser = (user) => ({ type: SET_USER, user });

//THUNKS (call to firebase db here on user collection for specific doc)
export const setUserThunk = () => {
  return async (dispatch) => {
    try {
      const { currentUser } = await firebase.auth();
      const { uid } = currentUser;

      const usersRef = await db.collection('users');
      const userDoc = await usersRef.doc(uid).get();

      const user = userDoc.data();
      dispatch(setUser(user));
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const loginUserThunk = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      const { uid } = response.user;
      const usersRef = await db.collection('users');
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

      //CREATE AND SET USER SECTION

      //create user body
      const user = {
        id: uid,
        email,
        fullName,
      };

      //set user
      const usersRef = await db.collection('users');
      await usersRef.doc(uid).set(user);
      dispatch(setUser(user));

      //CREATE LIST SUB-COLLECTION & DOC SECTION

      //create lists subcollection by uid
      const listsRef = await usersRef.doc(uid).collection('lists');
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();

      const listHired = {
        listName: 'Get Hired',
        ownerId: uid,
        createdAt: timestamp,
      };

      const listGroceries = {
        listName: 'Groceries',
        ownerId: uid,
        createdAt: timestamp,
      };

      const listErrands = {
        listName: 'Run Errands',
        ownerId: uid,
        createdAt: timestamp,
      };

      const listCar = {
        listName: 'Car Stuff',
        ownerId: uid,
        createdAt: timestamp,
      };

      //creation of initial list doc upon sign-up
      await listsRef.doc('Run Errands').set(listErrands);
      await listsRef.doc('Car Stuff').set(listCar);
      await listsRef.doc('Groceries').set(listGroceries);
      await listsRef.doc('Get Hired').set(listHired);

      //CREATE TASK SUB-COLLECTION & DOCs SECTION (basically a seed file)
      //there's a better way to do it with batch, but it doesn't work with .add method
      const tasksRef = await listsRef.doc('Get Hired').collection('tasks');

      await tasksRef.add({
        ownerId: uid,
        listName: 'Get Hired',
        taskName: 'Reach out to existing network',
        complete: false,
        dueDate: 'After Graduation',
        createdAt: timestamp,
        taskDetails:
          'Reach out to your existing network, including family and friends. This can be done in two main ways. Widespread on existing social media sites like Facebook, Instagram, Twitter, and of course LinkedIn. Individually through direct contact like emails or direct messages, and phone or video calls.',
      });
      await tasksRef.add({
        ownerId: uid,
        listName: 'Get Hired',
        taskName: 'Apply to jobs',
        complete: false,
        dueDate: 'After Graduation',
        createdAt: timestamp,
        taskDetails: `Apply to multiple jobs per day. You can increase your chances of finding a job by making sure to do a few things with each application submission. Customize each resume and cover letter to fit the job description as much as possible. Research the company and the role that I'm applying for. Send Thank-You lettters or emails after interviews.`,
      });
      await tasksRef.add({
        ownerId: uid,
        listName: 'Get Hired',
        taskName: 'Contact recruiters',
        complete: false,
        dueDate: 'After Graduation',
        createdAt: timestamp,
        taskDetails: `Send messages to recruiters, especially at the companies where you've applied or will apply. Respond to messages from recruiters, you may not be able to get the exact job that you want so remember to stay open to opportunities that may come your way. Seek out and be open to having phone or video calls with recruiters at your earliest availability.`,
      });
      await tasksRef.add({
        ownerId: uid,
        listName: 'Get Hired',
        taskName: 'Practice technical interview questions',
        complete: false,
        dueDate: 'After Graduation',
        createdAt: timestamp,
        taskDetails: `Remember REACTO (restate, examples, approach, code, test, optimize). Doing well in the technical interview can be what gets you the job. If you weren't able to solve your attempted problem optimally or at all, spend some time researching the solution.`,
      });
      await tasksRef.add({
        ownerId: uid,
        listName: 'Get Hired',
        taskName: 'Network with people',
        complete: false,
        dueDate: 'After Graduation',
        createdAt: timestamp,
        taskDetails: `Look for opportunities to network with individuals during your job search. If attending networking events in person isn't an option, look for virtual events. Joining online groups through LinkedIn, Discord, Twitch, Facebook, etc. can also help you to connect with new people.`,
      });
      await tasksRef.add({
        ownerId: uid,
        listName: 'Get Hired',
        taskName: 'Write articles',
        complete: false,
        dueDate: 'After Graduation',
        createdAt: timestamp,
        taskDetails:
          'Increase your presence online by writing articles about techical topics. These can include Computer Science topics like Big O time and space analysis for problems (accompanied by a visual and explanation), specific sorting or searching algorithms (demonstrated with your code), or discussions about use cases for different abstract data structures. Additionally you can write about topics related to specific languages and frameworks, or more broadly you can write about concepts like RESTful APIs, the immutable nature of functional programming, and approaches to backend security',
      });
      await tasksRef.add({
        ownerId: uid,
        listName: 'Get Hired',
        taskName: 'Work on projects',
        complete: false,
        dueDate: 'After Graduation',
        createdAt: timestamp,
        taskDetails:
          'Add to your portfolio by creating a project built with a new tool. You can do this by learning one new tool, or attempting to learn multiple parts of a new stack. Think about extending the functionality of one of your old projects by using a new library or API. Participating in group projects and Hackathons can also be a good way to improve and add to your portfolio.',
      });
      await tasksRef.add({
        ownerId: uid,
        listName: 'Get Hired',
        taskName: 'Record yourself',
        complete: false,
        dueDate: 'After Graduation',
        createdAt: timestamp,
        taskDetails: `Preparing for your technical interviews can be one of the most challening parts of the job search. Recording yourself talking about and attempting novel problems can help you overcome some of the challenges that come with the technical interview. You can also extend this activity to the creation of videos to accompany the articles or code that you've written.`,
      });
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
