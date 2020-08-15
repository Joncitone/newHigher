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

export function AllLists(props) {
  //userID passed down through props
  const userID = props.user.id;

  //reference to collection in firestore database
  //lists will be a sub collection on user documents, so this reference will change
  const allListsRef = firebase.firestore().collection('lists');

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
    //actions to proceed from Clicking an Existing List, navigate to Single List Screen
  };

  return <div>All Lists Screen</div>;
}

const mapState = (state) => {};

const mapDispatch = (dispatch) => {};

export default connect(mapState, mapDispatch)(AllLists);
