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

export function HomeScreen(props) {
  //const [entityText, setEntityText] = useState('');
  //const [entities, setEntities] = useState([]);
  const navigation = useNavigation();
  const { user } = props;
  useEffect(() => {
    //see awp-reactnative-firebase for original code here
  }, []);

  //handlerFunction for when button gets clicked/pressed
  const onGoToListsPress = () => {
    //see awp-reactnative-firebase for original code here
    navigation.navigate('My Lists');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{`${user.fullName}`}</Text>
      <Text style={styles.headerText}>`Welcome to new Higher( &#10003; )`</Text>
      <Text style={styles.descriptionText}>
        {`'this' is an instance of a to-do list application in a Class of its own`}
      </Text>
      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.button} onPress={onGoToListsPress}>
          <Text style={styles.buttonText}>Go To Lists</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapState = (state) => {};

const mapDispatch = (dispatch) => {};

export default connect(null, null)(HomeScreen);
