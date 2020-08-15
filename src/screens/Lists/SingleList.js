import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';

export function SingleList(props) {
  //useState Hook for functional component
  const [state, setState] = useState('');
  //navigation hook
  const navigation = useNavigation();
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
