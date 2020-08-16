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
import { firebase } from '../../firebase/config';
import { connect } from 'react-redux';

export function AllLists(props) {
  const { user } = props;
  //useState Hook for functional component
  const [state, setState] = useState('');
  //navigation hook
  const navigation = useNavigation();
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

  return (
    <View>
      <Text>All Lists Page</Text>
    </View>
  );
}

const mapState = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {};

export default connect(mapState, null)(AllLists);
