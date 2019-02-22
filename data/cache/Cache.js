import {AsyncStorage} from 'react-native';

const storeData = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (error) {
		console.log(error);
	}

	return true;
};

const retrieveData = async (key) => {
	let value = "";
	try {
		value = await AsyncStorage.getItem(key);
		
	} catch (error) {
		console.log(error);
	}
	return value;
};

export {
	storeData, retrieveData
}