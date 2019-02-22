import React, { Component } from "react";
import {View, Text, StyleSheet, Image, ScrollView} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'

import {firebaseDB} from '../configs/firebase';
//custom components imports 
import CustomHeader from '../components/CustomHeader'
import PageHeader from '../components/elements/PageHeader/PageHeader';
import SpiderChart from '../components/elements/SpiderChart';
import Competences from '../components/elements/Competences/Competences';

class Home extends Component {
    static navigationOptions = {
        drawerLabel: 'Strengthen treasure hunt'
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
            // console.log(competences);
            this.setState({items: competences});
        }, function (error) {
            console.log("Error: " + error.code);
        });        
    }

    render() {
        const {items} = this.state;
        const {navigation} = this.props;
        // console.log('navigation.navigate', navigation.navigate);
        return (
            <Container>
                <CustomHeader title="Home" drawerOpen={() => this.props.navigation.openDrawer()} />
                <PageHeader text={'Stärkenschatz-Suche - Introduction'}/>
                <ScrollView contentContainerStyle={{paddingVertical: 20}}>   
                      
                    <Competences navigate={navigation.navigate} items={items} />
                </ScrollView>
            </Container>

        )
    }

}

export default Home;

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

//<SpiderChart />       