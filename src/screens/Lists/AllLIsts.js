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

export default function AllLists(props) {
  //reference to collection in firestore database
  //lists will be a sub collection on user documents, so this reference will change
  const listRef = firebase.firestore().collection('lists');

  //userID passed down through props
  const userID = props.user.id;

  //useState Hook for functional component
  const [state, setState] = useState('');

  //useEffect Hook for initial loading of page resources upon mounting
  useEffect(() => {
    //see HomeScreen for example of loading information from firestore
  }, []);

  const onAddList = () => {
    //actions to proceed from Add List button being clicked
  };

  const onClickList = () => {
    //actions to proceed from Clicking and Existing list
  };

  return <div>All Lists Screen</div>;
}
