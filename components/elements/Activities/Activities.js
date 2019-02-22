import React, { Component } from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableHighlight} from "react-native";

const getImageFileName = (isDone) => {
	let filename = null;
	switch (isDone) {
		case true:
			filename = require('../../../assets/activities/check.png');
			break;
		case false:
			filename = require('../../../assets/activities/cancel.png');
			break;
	}

	return filename;
}

class Activities extends React.Component {
  	render() {
  		const {navigate, items, competence, competence_icon} = this.props;
    	return (
    		<View style={styles.container}>
		        <FlatList
		        	data={items}
		        	renderItem={({item, index}) => {
						const activitiesId = (index + 1);
						const activityIcon = getImageFileName(false);
						const params = {
							competence: competence,
							competence_icon: competence_icon,
							activity: item,
							activity_icon: activityIcon,
							is_done: false
						}
						return (
							<View style={{...styles.content, flex: 1, flexDirection: 'row'}}>
						        <Image
			                        source={activityIcon}
			                        style={{ width: 16, height: 16, marginLeft: 15, marginRight: 15, position: 'relative', top: 3}}
			                    />
								<Text style={{...styles.item, color: item.color}} onPress={() => navigate('Exercise', params)}>{item.title_de} ({item.time_duration})</Text>
								<TouchableHighlight 
									style={{marginRight: 15, position: 'relative', top: 3, marginLeft: 'auto'}}
									onPress={() => navigate('Exercise', params)}>
							        <Image
				                        source={require('../../../assets/activities/arrow.png')}
				                        style={{ width: 10, height: 16}}
				                    />
				                </TouchableHighlight>
							</View>
						)
					}}
		        />
		    </View>
	    );
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 22,
		width: "100%"
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
	},
	item: {
		padding: 0,
		fontSize: 18,
	},
})

export default Activities;