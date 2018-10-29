
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  Picker,
  ImageBackground,
  StatusBar,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cust_id: this.props.id,
      customerData: [],
    };
  }

 

  render() {
     console.log(this.props.id);
    return (
     <View>
        {this.props.title}
     </View>
    );
  }
}
const styles = StyleSheet.create({
  bar: {
    color: '#ffffff',
    fontSize: 25,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  home: {
    color: '#fff',
    fontSize: 30,
  },
  button: {
    backgroundColor: '#640405',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textstyle: {
    fontSize: 20,
    color: '#ffffff',
  },
});
