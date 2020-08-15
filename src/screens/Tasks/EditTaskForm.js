import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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

export default function EditTaskForm(props) {
  //userID passed down through props
  const userID = props.user.id;

  //reference to collection in firestore database
  //singleTask will be a document of the task sub-collection so this reference will change
  const singleTaskRef = firebase.firestore().collection('tasks');

  //useState Hook for functional component
  const [state, setState] = useState('');

  //useForm Hook for demo usage see https://react-hook-form.com
  //eliminates need for multiple useState values above
  const { register, handleSubmit, setValue } = useForm();

  //useEffect Hook for initial loading of page resources upon mounting
  useEffect(() => {
    //use in combination with useForm for easy rendering of form inputs
  }, []);

  const onSubmit = () => {
    //actions to proceed from Add List button being clicked
  };

  return <div>Edit Task Form</div>;
}
