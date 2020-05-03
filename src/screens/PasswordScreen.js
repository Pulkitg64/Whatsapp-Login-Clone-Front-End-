import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import InputPassword from '../components/InputPassword';
import NavigationComponent from '../components/NavigationComponent';
import {MaterialIcons} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

const PasswordScreen = ({navigation}) => {
   return(
	   <ScrollView>

   	<View style={styles.ubg} >
   	<TouchableOpacity onPress={() => navigation.navigate('Home')} >
   	<MaterialIcons 
   	name="keyboard-backspace"
   	size={40}
   	color="#ffffff"
   	style={styles.icon}
   	/>
   	</TouchableOpacity>
   	<Text style={styles.text} >WhatsApp</Text>
   	<InputPassword />
   	</View>
   	<View style={styles.lbg}>
   	<NavigationComponent content="I forgot my password" nvgt="Password"/>   	
   	</View>
	
	</ScrollView>
	);
};

const styles=StyleSheet.create({
	container: {
		flex: 1
	},
	ubg : {
		backgroundColor : '#465a65',
		flex : 2,
		justifyContent : 'flex-end'
	},
	lbg : {
		backgroundColor : '#ffffff',
		flex: 3
	},
	text : {
		fontSize : 40,
		textAlign:'center',
		marginTop : 5,
		marginBottom : 25,
		color : '#ffffff',
		fontWeight : 'bold'
	},
	icon : {
     marginLeft : 10
	}
});

export default withNavigation(PasswordScreen);