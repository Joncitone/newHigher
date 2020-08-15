import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
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
import { connect } from 'react-redux';

export function EditListForm(props) {
  const { user } = props;
  //useState Hook for functional component
  const [state, setState] = useState('');
  //navigation hook
  const navigation = useNavigation();
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

  return <div>Edit List Form</div>;
}

const mapState = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {};

export default connect(mapState, null)(EditListForm);
