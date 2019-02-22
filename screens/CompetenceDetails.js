import React, { Component } from "react";
import {View, Text, StyleSheet, Image} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'

import {firebaseDB} from '../configs/firebase';
//custom components imports 
import CustomHeader from '../components/CustomHeader'
import PageHeader from '../components/elements/PageHeader/PageHeader';
import Activities from '../components/elements/Activities/Activities';

class CompetenceDetails extends Component {
    static navigationOptions = {
        headerTitle:'test',
        headerRight: (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
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
        const {navigation} = this.props;
        const competenceId = navigation.getParam('competence_id');
        if (typeof competenceId != 'undefined') {
            const ref = firebaseDB.ref(`Activities/competence_${competenceId}`);
            ref.on("value", (snapshot) => {
                const activities = snapshot.val().filter((c, i) => {
                    return typeof c != 'undefined' ? true : false;
                }).map((c, i) => {c.key = `${c.title_de}_${i}`; return c;});
                console.log(activities);
                this.setState({items: activities});
            }, function (error) {
                console.log("Error: " + error.code);
            });  
        }          
    }

    render() {
        const {items} = this.state;
        const {navigation} = this.props;
        const competence = navigation.getParam('competence');
        const competenceIcon = navigation.getParam('competence_icon');
        return (
            <Container>
                <CustomHeader title="Home" drawerOpen={() => this.props.navigation.openDrawer()} />
                <PageHeader text={'Competence Details'}/>
                <Content> 
                    <View style={{flexDirection: 'row', textAlign: 'left', paddingTop: 15, paddingBottom: 10}}>
                        <Image
                            source={competenceIcon}
                            style={{ width: 24, height: 24, marginLeft: 15, marginRight: 15, position: 'relative', top: 3}}
                        />
                        <Text h1 style={{...styles.header, color: competence.color}}>{competence.title_de}</Text>
                    </View>
                    <View style={{paddingTop: 10, paddingBottom: 10}}>
                        <Text h1 style={styles.link}>{competence.link_label}</Text>
                    </View>
                    <Activities navigate={navigation.navigate} items={items} 
                        competence={competence} competence_icon={competenceIcon}
                    />
                </Content>
            </Container>

        )
    }

}

export default CompetenceDetails;

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
    }
});