import React, { Component } from 'react';
import {View, Text, StyleSheet} from "react-native";

const PageHeader = (props) => (
	<View style={styles.container}>
        <Text style={styles.inner}>{props.text}</Text>
    </View>
);

const styles = StyleSheet.create({
	container: {		
		backgroundColor: "#3c8140",
		padding: 10

	},
	inner: {
		color: "#ffffff",
		textAlign: "center"
	}
})

export default PageHeader;