import { AsyncStorage, Alert } from "react-native";

export default class StateManager {
	async static updateState(newState) {
		try {
			const states = await AsyncStorage.getItem('states');
			const currStates = JSON.parse(states);
			if (!currStates) {
				currStates = [];
			}
			currStates.push(newState);
			await AsyncStorage.setItem('states', JSON.stringify(currStates));
		} catch (error) {
			// Error saving data
			Alert.alert("error saving state: ", error);
		}
	}

	static revertState() {
		Alert.alert("back pressed");
	}
}