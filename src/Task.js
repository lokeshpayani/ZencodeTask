/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, 
  Platform, 
  View,
   ActivityIndicator, 
   FlatList,
    Text,
     Image, Alert, YellowBox,NetInfo,
    TouchableOpacity,
  RefreshControl } from 'react-native';
 
import {Router,Scene,Actions} from 'react-native-router-flux';
export default class Task extends Component {
 
 constructor(props) {
 
   super(props);
 
   this.state = {
     dataSource:[],
     isLoading: true,
     connection_Status : "",
     refreshing: false,
 
   }
 
   YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
  ]);
 
 }

 
 componentDidMount() {
 
    NetInfo.isConnected.addEventListener(
        'connectionChange',
        this._handleConnectivityChange
 
    );
   
    NetInfo.isConnected.fetch().done((isConnected) => {
 
      if(isConnected == true)
      {
        this.setState({connection_Status : "Online"})
      }
      else
      {
        this.setState({connection_Status : "Offline"})
      }
 
    });
  }
  
 
  componentWillUnmount() {
 
    NetInfo.isConnected.removeEventListener(
        'connectionChange',
        this._handleConnectivityChange
 
    );
 
  }
 
  _handleConnectivityChange = (isConnected) => {
 
    if(isConnected == true)
      {
        this.setState({connection_Status : "Online"})
      }
      else
      {
        this.setState({connection_Status : "Offline"})
      }
  };
GetItem (body) {
  
 Alert.alert(body);
 
 }
 
 FlatListItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }
 
onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  componentWillMount () {
    this.fetchData ();
  }

  fetchData = () => {
       let url = 'https://api.github.com/repos/crashlytics/secureudid/issues';
     fetch (url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      
    })
      .then (response => {
        return response.json ();
      })
      .then (responseJson => {
        console.log ('Response:', responseJson);
        this.setState ({
         
          dataSource: responseJson,
          isLoading:false
        });
      })
      .catch (error => {
        Alert.alert ('Something went wrong, please try again later..');
      });
   
  };

 render() {
 
   if (this.state.isLoading) {
     return (
 
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
 
         <ActivityIndicator size="large" />
 
       </View>
       
     );
 
   }
  
   return (
 
     <View style={styles.MainContainer}>
     <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 20}}> You are { this.state.connection_Status } </Text>
 
       <FlatList
           data={ this.state.dataSource }
           ItemSeparatorComponent = {this.FlatListItemSeparator}
           renderItem={({item})=>
        
        <TouchableOpacity onPress={()=> Actions.list ({id:item.id,
                                                        body:item.body,
                                                        comments:item.comments,
                                                        user:item.user.login,
                                                        logo: item.user.avatar_url})}>
          <View style={{flex:1}}>
            <View style={{flex:1, flexDirection: 'row'}} >
              <Image source = {{ uri: item.user.avatar_url }} style={styles.imageView} />
              <Text style={{fontSize:14,fontWeight:'bold',justifyContent:'center'}}> Title:{item.title}</Text>
           </View>
           <View style={{flex:1,flexDirection:'row'}}>
             <Text numberOfLines={4} style={{fontSize:12,paddingHorizontal:10}}><Text style={{fontFamily:'bold'}}>Description:{'\n'}</Text>{item.body}</Text>
             <Text style={{fontSize:12,paddingHorizontal:10}}>Date: {item.updated_at}</Text>
           </View>  
           </View>
       </TouchableOpacity>
        }
        keyExtractor={(item, index) => index.toString()}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
          />
 
       </View>
   );
 }
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imageView: {
 
    width: '25%',
    height: 70 ,
    margin: 7,
    borderRadius : 7
 
},
 
textView: {
 
    width:'50%', 
    textAlignVertical:'center',
    padding:10,
    color: '#000'
 
}
});
