
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
  Image
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cust_id: this.props.id,
      body: this.props.body,
      comment:this.props.comments,
      user:this.props.user,
      image1:this.props.logo
    };
  }

 

  render() {
     console.log(this.props.user);
    return (
     <View style={{flex:1,backgroundColor:'#00bcd4',alignItems:'center'}}>
    
       <Text style={{fontFamily:'bold',fontSize:20, color:'red'}}>Details</Text>
     
     <View style={{ flexDirection: 'row',marginTop:10}} >
        <Image source = {{ uri: this.state.image1}} style={styles.imageView} />
        <View style={{ flex:1}} >
          <Text style={{fontFamily:'bold',fontSize:20,color:'#ffffff',}}> Name:{this.state.user}{'\n'}</Text>
          <Text style={{fontFamily:'bold',fontSize:20,color:'#ffffff',}}>comments:{this.state.comment}</Text>
        </View>
      </View>
        <Text style={{color:'#ffffff',fontSize:15,paddingHorizontal:10}}>{this.state.body}</Text>
        
     
     </View>
    );
  }
}
const styles = StyleSheet.create({
  imageView: {

    width: '25%',
    height: 70,
    margin: 7,
    borderRadius: 7

  },
});
