import React, { Component } from "react";
import {View, Text, StyleSheet, Image} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'

import {firebaseDB} from './configs/firebase';
//custom components imports 
import CustomHeader from './components/CustomHeader'
import PageHeader from './components/elements/PageHeader/PageHeader';
import SpiderChart from './components/elements/SpiderChart';
import Competences from './components/elements/Competences/Competences';

class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Homsdse',
        drawerIcon: ({ tintColor }) => (
            <Image
            source={require('./assets/DrawerIcons/home.png')}
            style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        const ref = firebaseDB.ref('Competences');
        ref.on("value", (snapshot) => {
            const competences = snapshot.val().filter(c => {
                return typeof c != 'undefined' ? true : false;
            }).map((c, i) => {c.key = c.title_de; return c;});
            console.log(competences);
            this.setState({items: competences});
        }, function (error) {
            console.log("Error: " + error.code);
        });        
    }

    render() {
        const {items} = this.state;
        return (
            <Container>
                <CustomHeader title="Home" drawerOpen={() => this.props.navigation.openDrawer()} />
                <PageHeader text={'Stärkenschatz-Suche - Introduction'}/>
                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>               
                    <Competences items={items} />
                </Content>
            </Container>

        )
    }

}

export default HomeScreen;

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
        color: "#53a69c"
    },
});