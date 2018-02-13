import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

class Game extends Component {

	render() {
		return (

			<View style ={styles.container}>
				<Text style ={styles.text}> You are in the Game </Text>
			</View>

		)
	}

};

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#000',
	},
	text: {
		color: '#fff',
	}
});

export default Game;