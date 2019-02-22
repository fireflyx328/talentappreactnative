import React, { Component } from "react";
import {Image} from "react-native";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Header, Body, Title, Content, Left, Icon, Right } from 'native-base'

class CustomHeader extends Component {
    render() {
        return (
            <Header style={{backgroundColor: "#ffffff"}}>
                <Left><Icon name="ios-menu" onPress={() => this.props.drawerOpen()} /></Left>
                <Body>
                    <Image
                        source={require('../assets/logo.png')}
                        style={{ width: 40, height: 30 }}
                    />
                </Body>
                <Right />
            </Header>
        );
    }
}
export default CustomHeader;