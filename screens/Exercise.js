import React, { Component } from "react";
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from "react-native";

//library imports
import { Icon, Container, Header, Content, Left } from 'native-base'

import {firebaseDB} from '../configs/firebase';
//custom components imports 
import CustomHeader from '../components/CustomHeader'
import PageHeader from '../components/elements/PageHeader/PageHeader';

const getImageFileName = (isDone) => {
    let filename = null;
    switch (isDone) {
        case true:
            filename = require('../assets/exercises/check.png');
            break;
        case false:
            filename = require('../assets/exercises/cancel-black.png');
            break;
    }

    return filename;
}

class Exercise extends Component {
    static navigationOptions = {};
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {  
        // const {navigation} = this.props;
        // const competenceId = navigation.getParam('competence_id');
        // if (typeof competenceId != 'undefined') {
        //     const ref = firebaseDB.ref(`Activities/competence_${competenceId}`);
        //     ref.on("value", (snapshot) => {
        //         const activities = snapshot.val().filter(c => {
        //             return typeof c != 'undefined' ? true : false;
        //         }).map((c, i) => {c.key = c.title_de; return c;});
        //         console.log(activities);
        //         this.setState({items: activities});
        //     }, function (error) {
        //         console.log("Error: " + error.code);
        //     });  
        // }          
    }

    render() {
        const {items} = this.state;
        const {navigation} = this.props;
        const competence = navigation.getParam('competence');
        const competenceIcon = navigation.getParam('competence_icon');
        const activity = navigation.getParam('activity');
        const activityIcon = navigation.getParam('activity_icon');
        const isDone = navigation.getParam('is_done');
        console.log('competence', competence);
        console.log('activity', activity);
        return (
            <Container>
                <CustomHeader title="Home" drawerOpen={() => this.props.navigation.openDrawer()} />
                <PageHeader text={'Exercise'}/>
                <Content contentContainerStyle={{ flex: 1}}> 
                    <View style={{flexDirection: 'row', textAlign: 'left', alignItems: 'left', paddingTop: 15, paddingBottom: 10}}>
                        <Image
                            source={competenceIcon}
                            style={{ width: 24, height: 24, marginLeft: 15, marginRight: 15, position: 'relative', top: 3}}
                        />
                        <Text h1 style={{...styles.header, color: competence.color}}>{competence.title_de}</Text>
                    </View>
                    <View style={{...styles.content, flexDirection: 'row'}}>
                        <Image
                            source={getImageFileName(isDone)}
                            style={{ width: 16, height: 16, marginLeft: 15, marginRight: 15, position: 'relative', top: 3}}
                        />
                        <Text style={{color: activity.color}} onPress={() => navigate('Exercise', params)}>{activity.title_de} ({activity.time_duration})</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                              style={styles.loginScreenButton}
                              onPress={() => alert('HomeScreen')}
                              underlayColor='#fff'>
                              <Text style={styles.loginText}>Login</Text>
                     </TouchableOpacity>
                    </View>
                </Content>
            </Container>

        )
    }

}

export default Exercise;

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    header: {
        
        fontSize: 24
    },
    link: {
        color: "#53a69c",
        fontWeight: "600",
        fontSize: 16,
        textDecorationLine: "underline",
        textAlign: "center",
        alignItems: 'center'
    },
    loginScreenButton:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#2e70ef',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    loginText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    },
    content: {
        paddingTop: 17,
        paddingBottom: 17,
        backgroundColor:'#ffffff',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        }
    }
});