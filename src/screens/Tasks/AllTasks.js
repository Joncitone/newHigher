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

export default function AllTasks(props) {
  //userID passed down through props
  const userID = props.user.id;

  //reference to collection in firestore database
  //taks will be a sub collection on list documents, so this reference will change
  const allTasksRef = firebase.firestore().collection('tasks');

  //useState Hook for functional component
  const [state, setState] = useState('');

  //useEffect Hook for initial loading of page resources upon mounting
  useEffect(() => {
    //see HomeScreen for example of loading information from firestore
  }, []);

  const onAddTask = () => {
    //actions to proceed from Add List button being clicked
  };

  const onClickTask = () => {
    //actions to proceed from Clicking an Existing List, navigate to Single List Screen
  };

  return <div>All Tasks Screen</div>;
}
