import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { firebase } from '../../firebase/config';
import { connect } from 'react-redux';

export function SingleList(props) {
  //userID passed down through props
  const userID = props.user.id;

  //reference to collection in firestore database
  //lists will be a sub collection on user documents, so this reference will change
  const singleListRef = firebase.firestore().collection('lists');
  const allTasksRef = firebase.firestore().collection();

  //useState Hook for functional component
  const [state, setState] = useState('');

  //useEffect Hook for initial loading of page resources upon mounting
  useEffect(() => {
    //see HomeScreen for example of loading information from firestore
  }, []);

  const onCheckTask = () => {
    //actions to proceed after checking off a task (point increment)
  };

  const onUncheckTask = () => {
    //actions to proceed after unchecking a task (point decrement)
  };

  const onAddTask = () => {
    //action to proceed after clicking add task (add task form)
  };

  return <div>Single List Screen</div>;
}

const mapState = (state) => {};

const mapDispatch = (dispatch) => {};

export default connect(mapState, mapDispatch)(SingleList);
