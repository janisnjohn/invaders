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
import axios from 'axios';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		}
		this.handleLogin = this.handleLogin.bind(this);
	}

	componentsDidMount() {
		this._loadInitialState().done();
	}

	_loadInitialState = async () => {

		const value = await AsyncStorage.getItem('user');
		if (value !== null) {
			this.props.navigation.navigate('Game');
		}
	}

	handleLogin() {
		alert(this.state.email, this.state.password);

		fetch('https://agile-mountain-78716.herokuapp.com/auth', {
		  method: 'POST',
		  // headers: {
		  //   Accept: 'application/json',
		  //   'Content-Type': 'application/json',
		  // },
		  body: JSON.stringify({
		    email: this.state.email,
		    password: this.state.password,
		  })
		})
		.then((response) => response.json())
		.then((res) => {

			if (res.success === true) {
			AsyncStorage.setItem('user', res.user);
			this.props.navigation.navigate('Game');
			}else {
				alert(res.message);
			}

		})
		.done();
	}

	render() {
		return (
			<KeyboardAvoidingView behavior = 'padding' style = {styles.wrapper}>

				<View style ={styles.container}>

					<Text style = {styles.header}>Alien Attackers</Text>
					<Text style = {styles.header}>Login</Text>


					<TextInput
						style =	 {styles.textInput} placeholder = 'Eamil'
						onChangeText = { (email) => this.setState({email}) }
					/>

					<TextInput
						style =	 {styles.textInput} placeholder = 'Password'
						onChangeText = { (password)	=>	this.setState({password}) }
						secureTextEntry = {true}
					/>

					<TouchableOpacity
						style = {styles.btn}
						onPress = {this.handleLogin}>
						<Text>Login</Text>
					</TouchableOpacity>

				</View>

			</KeyboardAvoidingView>
		)
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