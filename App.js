import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { firebase } from './src/firebase/config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './src/store';
import {
  LoginScreen,
  HomeScreen,
  SignUpScreen,
  // List Imports
  AllLists,
  SingleList,
  AddListForm,
  EditListForm,
  //Task Imports
  AllTasks,
  SingleTask,
  AddTaskForm,
  EditTaskForm,
} from './src/screens';
import { decode, encode } from 'base-64';
!global.btoa ? (global.btoa = encode) : null;
!global.atob ? (global.atob = decode) : null;

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* conditional access to screens based on logged-in status */}
          {user ? (
            <>
              <Stack.Screen name="Home">
                {(props) => <HomeScreen {...props} user={user} />}
              </Stack.Screen>
              <Stack.Screen name="Add List" component={AddListForm} />
              <Stack.Screen name="My Lists" component={AllLists} />
              <Stack.Screen name="Edit List" component={EditListForm} />
              <Stack.Screen name="List" component={SingleList} />
              <Stack.Screen name="Add Task" component={AddTaskForm} />
              <Stack.Screen name="My Tasks" component={AllTasks} />
              <Stack.Screen name="Edit Task" component={EditTaskForm} />
              <Stack.Screen name="Task" component={SingleTask} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
