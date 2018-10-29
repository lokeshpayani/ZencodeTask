
import React,{Component} from 'react';
import {Platform, View, Text,Alert} from 'react-native';


import {Router,Scene} from 'react-native-router-flux';
import Task from './components/Task';
import List from './components/List';




export default class index extends Component{

  constructor(props){
    super(props);
    this.state={
       //isRunning: false,
    };
  }
 
   

  render(){
    return(
      <Router
        navigationBarStyle={{ backgroundColor: "#00bc78" }}
        titleStyle={{ color: "#FFFFFF" }}
      >
      
       <Scene key="root" hideNavBar >
          
          <Scene
            key="task"
            component={Task}
            initial
          />
           <Scene
            key="list"
            component={List}
            
          />
          </Scene>
          </Router>
    );
  }
}


