import React, { Component } from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableHighlight} from "react-native";

import ListItem from '../ListItem/ListItem';

const getImageFileName = (competenceId) => {
	let filename = null;
	switch (competenceId) {
		case 1:
			filename = require('../../../assets/competences/1.png');
			break;
		case 2:
			filename = require('../../../assets/competences/2.png');
			break;
		case 3:
			filename = require('../../../assets/competences/3.png');
			break;
		case 4:
			filename = require('../../../assets/competences/4.png');
			break;
		case 5:
			filename = require('../../../assets/competences/5.png');
			break;
		case 6:
			filename = require('../../../assets/competences/6.png');
			break;
		case 7:
			filename = require('../../../assets/competences/7.png');
			break;
		case 8:
			filename = require('../../../assets/competences/8.png');
			break;
		case 9:
			filename = require('../../../assets/competences/9.png');
			break;
		case 10:
			filename = require('../../../assets/competences/10.png');
			break;
	}

	return filename;
}

class Competences extends React.Component {
  	render() {
  		const {navigate, items} = this.props;
    	return (
    		<View style={styles.container}>
		        <FlatList
		        	data={items}
		        	renderItem={({item, index}) => {
						const competenceId = (index + 1);
						const competenceIcon = getImageFileName(competenceId);
						const params = {
							competence: item,
							competence_id: competenceId,
							competence_icon: competenceIcon
						}
						return (
							<View style={{...styles.content, flexDirection: 'row'}}>
						        <Image
			                        source={competenceIcon}
			                        style={{ width: 16, height: 16, marginLeft: 15, marginRight: 15, position: 'relative', top: 3}}
			                    />
								<Text style={{...styles.item, color: item.color}} onPress={() => navigate('CompetenceDetails', params)}>{item.title_de}</Text>
								<TouchableHighlight 
									style={{marginRight: 15, position: 'relative', top: 3, marginLeft: 'auto'}}
									onPress={() => navigate('CompetenceDetails', params)}>
							        <Image
				                        source={require('../../../assets/competences/arrow.png')}
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
		flex: 1,
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
		fontSize: 18
	},
})

export default Competences;