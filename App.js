import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//library imports 
import { Container, Content, Icon, Header, Body } from 'native-base'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import {firebaseDB} from './configs/firebase';

//custom files 
import SettingsScreen from './SettingsScreen';
import Home from "./screens/Home";
import CompetenceDetails from './screens/CompetenceDetails'
import Exercise from './screens/Exercise'
import Login from './screens/Login'
import Signup from './screens/Signup'

// const database = firebase.database();

export default class App extends React.Component {
  componentDidMount() {
    // const dbRefObject = firebase.database().ref().child('Competences');
    // console.log('componentDidMount');
    // // dbRefObject.once('value', function(snap) {
        // console.log((firebaseDB));
    // // });
    // var ref = firebase.database().ref('Activities');
    // console.log('componentDidMount!');
    // ref.on("value", function(snapshot) {
    //    console.log(snapshot.val());
    // }, function (error) {
    //    console.log("Error: " + error.code);
    // });
    
  }
  render() {
    return (
      <MyApp />
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  CompetenceDetails: {
    screen: CompetenceDetails
  },
  Exercise: {
    screen: Exercise
  }
});

const MyApp = createAppContainer(MyDrawerNavigator);
