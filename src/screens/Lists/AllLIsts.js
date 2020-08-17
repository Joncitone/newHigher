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
import { setAllListsThunk } from '../../store/list';
import { setUserThunk } from '../../store/user';

export function AllLists(props) {
  const { getUser, user, getAllLists, allLists } = props;
  //useState Hook for functional component
  const [state, setState] = useState('');
  //navigation hook
  const navigation = useNavigation();
  //useEffect Hook for initial loading of page resources upon mounting
  useEffect(() => {
    //see HomeScreen for example of loading information from firestore
    getUser();
    getAllLists();
  }, []);

  const onAddList = () => {
    //actions to proceed from Add List button being clicked
  };

  const onClickList = () => {
    //actions to proceed from Clicking an Existing List, navigate to Single List Screen
  };

  const renderList = ({ item }) => {
    return (
      <View style={styles.allListsContainer}>
        <Text style={styles.listName}>{item.listName}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {allLists && (
        <View style={styles.listContainer}>
          <FlatList
            data={allLists}
            renderItem={renderList}
            keyExtractor={(item) => item.listName}
            removeClippedSubviews={true}
          />
        </View>
      )}
    </View>
  );
}

const mapState = (state) => {
  return {
    user: state.user,
    allLists: state.list.all,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getUser: () => dispatch(setUserThunk()),
    getAllLists: () => dispatch(setAllListsThunk()),
  };
};

export default connect(mapState, mapDispatch)(AllLists);
