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
import { setAllTasksThunk, setSingleTaskThunk } from '../../store/task';

export function SingleList(props) {
  const { user, singleList, allTasks, getAllTasks, getSingleTask } = props;
  //navigation hook
  const navigation = useNavigation();
  //useEffect Hook for initial loading of page resources upon mounting
  useEffect(() => {
    //see HomeScreen for example of loading information from firestore
    if (singleList.listName) {
      getAllTasks(singleList.listName);
    }
  }, [singleList]);

  const onCheckTask = () => {
    //actions to proceed after checking off a task (point increment)
  };

  const onUncheckTask = () => {
    //actions to proceed after unchecking a task (point decrement)
  };

  const onAddTask = () => {
    //action to proceed after clicking add task (add task form)
  };

  const onClickTask = (taskName) => {
    console.log(taskName);
    getSingleTask(singleList.listName, taskName);
    navigation.navigate('Task');
  };

  const renderTask = ({ item }) => {
    return (
      <View style={styles.allTasksContainer}>
        <Text
          style={styles.taskName}
          onPress={() => {
            onClickTask(item.taskName);
          }}
        >
          {item.taskName}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{singleList.listName}</Text>
      <View style={styles.container}>
        {allTasks && (
          <View style={styles.listContainer}>
            <FlatList
              data={allTasks}
              renderItem={renderTask}
              keyExtractor={(item) => item.taskName}
              removeClippedSubviews={true}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const mapState = (state) => {
  return {
    user: state.user,
    singleList: state.list.single,
    allTasks: state.task.all,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getAllTasks: (listName) => dispatch(setAllTasksThunk(listName)),
    getSingleTask: (listName, taskName) =>
      dispatch(setSingleTaskThunk(listName, taskName)),
  };
};

export default connect(mapState, mapDispatch)(SingleList);
