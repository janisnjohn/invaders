import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity,
	AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class Login extends Component {

	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: "",
		}
	}

	componentsDidMount() {
		this._loadInitialState().done();
	}
	_loadInitialState = async () => {

		const value = await AsyncStorage.getItem('user');
		if (value !== null) {
			this.props.navigation.navigate('Profile');
		}

	}
	render() {
		return (
			<KeyboardAvoidingView behavior = 'padding' style = {styles.wrapper}>

				<View style ={styles.container}>

					<Text style = {styles.header}>SpaceInvaders</Text>
					<Text style = {styles.header}>Login</Text>


					<TextInput
						style =	 {styles.textInput} placeholder = 'Username'
						onChangeText = { (username) => this.setState({username}) }
					/>

					<TextInput
						style =	 {styles.textInput} placeholder = 'Password'
						onChangeText = { (password)	=>	this.setState({password}) }
						secureTextEntry = {true}
					/>

					<TouchableOpacity
						style = {styles.btn}
						onPress = {this.Login}>
					</TouchableOpacity>

				</View>

			</KeyboardAvoidingView>
		)
	}

	Login = ()=> {
		alert('test');
	}
};

const styles = StyleSheet.create ({
	wrapper: {
		flex: 1,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#000',
		paddingLeft: 40,
		paddingRight: 40,
	},
	header: {
		fontSize: 24,
		marginBottom: 60,
		color: '#fff',
		fontWeight: 'bold',
	},
	textInput: {
		alignSelf: 'stretch',
		padding: 16,
		marginBottom: 20,
		backgroundColor: '#fff',
	},
	btn: {
		alignSelf: 'stretch',
		backgroundColor: '#01c853',
		padding: 20,
		alignItems: 'center',
	}
});

export default Login;